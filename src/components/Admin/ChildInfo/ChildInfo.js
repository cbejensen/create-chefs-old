import React from 'react';
import ChildParent from './ChildParent';
import { FirebaseListener } from 'components/FirebaseCustom';
import { Row, Col, Panel } from 'react-bootstrap';

export default function ChildInfo(props) {
  const styles = {
    infoBlock: {
      marginBottom: '10px'
    },
    info: {
      paddingLeft: '5px'
    }
  };
  const child = props.child;
  return (
    <div>
      <Row>
        <Col xs={12} className="text-center">
          <h1>{`${child.firstName} ${child.lastName}`}</h1>
        </Col>
      </Row>
      <Row style={styles.infoBlock}>
        <Col xs={6}>
          <strong>Age</strong> <br />
          <span style={styles.info}>{child.age}</span>
        </Col>
        <Col xs={6}>
          <strong>Gender</strong> <br />
          <span style={styles.info}>{child.gender}</span>
        </Col>
      </Row>
      <Row>
        {child.notes &&
          <Col xs={6} style={styles.infoBlock}>
            <strong>Notes</strong>
            <br />
            <span style={styles.info}>{child.notes}</span>
          </Col>}
        {child.allergies &&
          <Col xs={6} style={styles.infoBlock}>
            <strong>Allergies</strong>
            <br />
            <span style={styles.info}>
              {child.allergies}
            </span>
          </Col>}
      </Row>
      <FirebaseListener
        path={`users/${child.parent}`}
        passDataAs="parent"
      >
        <ChildParent />
      </FirebaseListener>
    </div>
  );
}
