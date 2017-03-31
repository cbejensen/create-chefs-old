import React from 'react';
import FormField from 'components/Form/FormField';
import * as firebase from 'firebase';

class FirebaseField extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.fbRef = firebase.database().ref(this.props.path);
    this.fbRef.on('value', snap => {
      this.setState({value: snap.val()});
    });
  }
  componentWillUnmount() {
    this.fbRef.off();
  }
  handleChange(e) {
    this.setState({value: e.target.value});
    this.props.handleChange && this.props.handleChange(e);
    this.fbRef.set(e.target.value);
  }
  render() {
    const {controlId, label, path, handleChange, ...props} = this.props;
    return (
      <FormField
        value={this.state.value || ''}
        controlId={controlId}
        label={label}
        onChange={this.handleChange}
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
