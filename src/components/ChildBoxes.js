import React from 'react';
import ChildBox from './ChildBox';
import FirebaseListener from 'components/FirebaseCustom/FirebaseListener';
import {Row, Col} from 'react-bootstrap';

export default function ChildBoxes(props) {
  const styles = {
    row: {
      marginBottom: '10px',
      maxWidth: '750px',
    },
    col: {
      textAlign: 'center',
    },
  };
  if (!props.childIds || !props.childIds.length) {
    return <div>There are no children set up on your account yet.</div>;
  } else {
    function getName({firstName, lastName}) {
      return firstName + ' ' + lastName
    }
    return (
      <Row style={styles.row}>
        {props.childIds.map(id => {
          return (
            <Col xs={4} style={styles.col} key={id}>
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
