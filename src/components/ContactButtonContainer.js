import React from 'react'
import ContactButton from './ContactButton'

class ContactButtonContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showContactMethods: false,
    }
  }

  toggleShowContactMethods = () => {
    this.setState((state) => ({
      showContactMethods: !state.showContactMethods,
    }))
  }

  render() {
    return (
      <ContactButton
        text={this.props.text}
        showContactMethods={this.state.showContactMethods}
        handleClick={this.toggleShowContactMethods}
      ></ContactButton>
    )
  }
}

ContactButton.propTypes = {
  text: React.PropTypes.string,
}

export default ContactButtonContainer
