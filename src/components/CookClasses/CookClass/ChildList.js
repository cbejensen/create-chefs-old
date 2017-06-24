import React from 'react';
import ChildRegBox from './ChildRegBox';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

export default function ChildList(props) {
  const styles = {
    col: {
      textAlign: 'center',
      padding: '5px 0'
    }
  };
  if (!props.childIds)
    return (
      <div style={styles.col}>
        <Link to="my-account">Click here</Link> to add
        children to your account
      </div>
    );
  return (
    <Row>
      {props.childIds.map(childId =>
        <Col
          xs={12}
          sm={props.childIds.length > 1 ? 6 : 12}
          style={styles.col}
          key={childId}
        >
          <ChildRegBox
            id={childId}
            classId={props.classId}
            isGroup={props.isGroup}
          />
        </Col>
      )}
    </Row>
  );
}
