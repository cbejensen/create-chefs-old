import React from 'react'
import { Panel } from 'react-bootstrap'

export default function ChildParent(props) {
  const styles = {
    infoBlock: {
      marginBottom: '10px',
    },
  }
  const parent = props.parent
  const emerg = parent.emergency
  const header = <h3>Parent</h3>
  return (
    <Panel header={header}>
      <div style={styles.infoBlock}>
        <strong>Name</strong>
        <br />
        <div>{`${parent.firstName} ${parent.lastName}`}</div>
      </div>
      <div style={styles.infoBlock}>
        <strong>Phone</strong>
        <br />
        <div>{parent.phone}</div>
      </div>
      {parent.email ? (
        <div style={styles.infoBlock}>
          <strong>Email</strong>
          <br />
          <div>{parent.email}</div>
        </div>
      ) : null}
      <div style={styles.infoBlock}>
        <strong>Address</strong>
        <br />
        <div>{parent.address}</div>
        <div>{`${parent.city}, ${parent.state} ${parent.zip}`}</div>
      </div>
      <div style={styles.infoBlock}>
        <strong>Emergency Contact</strong>
        <br />
        <div>{`${emerg.firstName} ${emerg.lastName}`}</div>
        <div>Phone: {emerg.phone}</div>
      </div>
    </Panel>
  )
}
