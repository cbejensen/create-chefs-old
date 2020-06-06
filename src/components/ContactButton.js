import React from 'react'
import { Button, Glyphicon } from 'react-bootstrap'

export default function ContactButton(props) {
  const styles = {
    wrap: {
      display: 'flex',
      justifyContent: 'center',
      margin: '1rem',
    },
    firstLink: {
      marginRight: '1rem',
    },
    linkText: {
      marginLeft: '1rem',
    },
  }
  return (
    <div style={styles.wrap}>
      {!props.showContactMethods ? (
        <Button onClick={props.handleClick}>
          {props.text || 'Contact Us'}
        </Button>
      ) : (
        <div>
          <Button href="tel:801-856-2768" style={styles.firstLink}>
            <Glyphicon glyph="phone"></Glyphicon>
            <span style={styles.linkText}>Call</span>
          </Button>
          <Button href="mailto:createclasses@gmail.com" target="_blank">
            <Glyphicon glyph="envelope"></Glyphicon>
            <span style={styles.linkText}>E-mail</span>
          </Button>
        </div>
      )}
    </div>
  )
}

ContactButton.propTypes = {
  text: React.PropTypes.string,
}
