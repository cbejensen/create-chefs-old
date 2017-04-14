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
    let originalData;
    this.fbRef.on('value', snap => {
      originalData = snap.val();
      this.setState({value: snap.val()});
    });
    this.setState({original: originalData});
  }
  componentWillUnmount() {
    this.fbRef.off();
  }
  handleChange(e) {
    const val = e.target.value;
    // clear timer from prevous onChange
    if (this.timer) window.clearTimeout(this.timer);
    // if blank, don't update db
    if (val === '' && this.props.required) {
      this.setState({value: val, status: 'warning'});
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
    if (this.props.handleChange) this.props.handleChange(e);
  }
  handleBlur(e) {
    // if blank on blur, change back to db value
    // as it was when this field mounted
    if (e.target.value === '' && this.props.required) {
      this.setState({value: this.state.original, status: null});
    }
    if (this.props.handleBlur) this.props.handleBlur(e);
  }
  showStatus() {
    switch (this.state.status) {
      case 'success':
        return 'Saved';
        break;
      case 'warning':
        return 'This field is required';
        break;
      case 'error':
        return 'Error saving changes';
        break;
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
        validationState={validationState || this.state.status}
        help={help || this.showStatus()}
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
