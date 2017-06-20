import React from 'react';
import ChildRegBox from './ChildRegBox';
import { Row, Col } from 'react-bootstrap';

export default function ChildList(props) {
  const styles = {
    col: {
      textAlign: 'center',
      padding: '5px 0'
    }
  };
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
