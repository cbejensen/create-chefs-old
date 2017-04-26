import React from 'react';
import ChildBox from './ChildBox';
import FirebaseListener from 'components/FirebaseCustom/FirebaseListener';
import {Row, Col} from 'react-bootstrap';

export default function ChildBoxes(props) {
  const styles = {
    row: {
      marginBottom: '10px',
    },
    col: {
      textAlign: 'center',
      padding: '5px 0',
    },
    noChildren: {
      textAlign: 'center',
      margin: '10px',
      fontWeight: 'bolder',
      fontSize: '1.2em',
    },
  };
  if (!props.childIds || !props.childIds.length) {
    return (
      <div style={styles.noChildren}>
        There are no children set up on your account yet.
      </div>
    );
  } else {
    function getName({firstName, lastName}) {
      return firstName + ' ' + lastName;
    }
    return (
      <Row style={styles.row}>
        {props.childIds.map(id => {
          return (
            <Col
              xs={12}
              sm={props.childIds.length > 1 ? 6 : 12}
              md={props.childIds.length > 2 ? 4 : null}
              style={styles.col}
              key={id}
            >
              <FirebaseListener
                path={`children/${id}`}
                transform={getName}
                passDataAs="name"
              >
                <ChildBox
                  id={id}
                  handleClick={props.handleClick}
                  style={props.style}
                />
              </FirebaseListener>
            </Col>
          );
        })}
      </Row>
    );
  }
}

ChildBoxes.propTypes = {
  handleClick: React.PropTypes.func,
  style: React.PropTypes.object,
};
