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
    this.fbRef
      .set(e.target.value)
      .then(res => {
        this.setState({status: 'success'});
        if (this.timer) window.clearTimeout(this.timer);
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
    this.props.handleChange && this.props.handleChange(e);
  }
  handleBlur(e) {
    if (e.target.value === '' && this.props.required)
      this.setState({value: this.state.original});
  }
  showStatus() {
    if (this.state.status === 'success') return 'Saved';
    if (this.state.status === 'error') return 'There was an error saving';
  }
  render() {
    const {controlId, label, path, handleChange, ...props} = this.props;
    return (
      <FormField
        value={this.state.value || ''}
        controlId={controlId}
        label={label}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        validationState={this.state.status}
        help={this.showStatus()}
        {...props}
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
