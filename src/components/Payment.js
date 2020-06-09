import React from 'react'

export default function Payment(props) {
  const styles = {
    link: {
      textDecoration: 'none',
    },
  }
  return (
    <a
      href="https://paypal.me/createclasses"
      target="_blank"
      style={styles.link}
    >
      {props.text || 'Pay via PayPal'}
    </a>
  )
}
