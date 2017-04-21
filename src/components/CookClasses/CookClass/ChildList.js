import React from 'react';
import ChildRegBox from './ChildRegBox';
import {Row, Col} from 'react-bootstrap';

export default function ChildList(props) {
  const styles = {
    col: {
      textAlign: 'center',
    },
  };
  return (
    <Row>
      {props.childIds.map(childId => (
        <Col xs={4} style={styles.col} key={childId}>
          <ChildRegBox id={childId} classId={props.classId} />
        </Col>
      ))}
    </Row>
  );
}
