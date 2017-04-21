import React from 'react';
import FormField from 'components/Form/FormField';
import * as firebase from 'firebase';

class FirebaseField extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: '', original: '', status: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  componentDidMount() {
    this.fbRef = firebase.database().ref(this.props.path);
    this.fbRef.once('value', snap => {
      const val = snap.val();
      this.setState({value: val, original: val});
    });
  }
  componentWillUnmount() {
    this.fbRef.off();
  }
  handleChange(e) {
    const val = e.target.value;
    this.setState({value: val});
    // clear timer from prevous onChange
    if (this.timer) window.clearTimeout(this.timer);
    // if blank, update state val
    // but change db val to original
    if (val === '' && this.props.required) {
      this.fbRef.set(this.state.original).then(
        res => {
          this.setState({status: 'warning'});
        },
        err => {
          this.setState({status: 'error'});
          console.log(err);
        },
      );
      return;
    }
    this.fbRef
      .set(val)
      .then(res => {
        this.setState({status: 'success'});
        // show saved msg temporarily
        this.timer = setTimeout(
          () => {
            this.setState({status: null});
          },
          1200,
        );
      })
      .catch(err => {
        this.setState({status: 'error'});
        console.log(err);
      });
    if (this.props.onBlur) this.props.onBlur(e);
  }
  handleBlur(e) {
    // if blank on blur, change back to db value
    // as it was when this field mounted
    if (e.target.value === '' && this.props.required) {
      this.setState({value: this.state.original, status: null});
    }
    if (this.props.onBlur) this.props.onBlur(e);
  }
  getValidation() {
    return this.state.status !== 'loading' ? this.state.status : null;
  }
  getStatus() {
    switch (this.state.status) {
      case 'success':
        return 'Saved';
      case 'warning':
        return 'This field is required';
      case 'error':
        return 'Error saving changes';
      case 'loading':
        return 'Loading...';
      default:
        return null;
    }
  }
  render() {
    const {
      path,
      value,
      onChange,
      onBlur,
      validationState,
      help,
      ...otherProps
    } = this.props;
    return (
      <FormField
        value={this.state.value}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        validationState={validationState || this.getValidation()}
        help={help || this.getStatus()}
        disabled={this.state.status === 'loading'}
        {...otherProps}
      >
        {this.props.children}
      </FormField>
    );
  }
}

FirebaseField.propTypes = {
  handleChange: React.PropTypes.func,
  path: React.PropTypes.string,
  controlId: React.PropTypes.string,
  label: React.PropTypes.string,
};

export default FirebaseField;
