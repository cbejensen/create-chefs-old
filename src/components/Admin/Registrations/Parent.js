import React from 'react';
import {Panel} from 'react-bootstrap';
import Item from './Item';

export default function Parent(props) {
  const styles = {
    name: {
      margin: '0',
      color: '#421dbd',
    },
  };
  const p = props.parent;
  const e = props.parent.emergency;
  const name = <h4 style={styles.name}>{`${p.firstName} ${p.lastName}`}</h4>;
  return (
    <Panel>
      <Item text={name} />
      <Item text="Phone: ">{p.phone}</Item>
      <Item text="Address">
        <div style={{marginLeft: '10px'}}>
          <div>{p.address}</div>
          <div>{`${p.city}, ${p.state} ${p.zip}`}</div>
        </div>
      </Item>
      <Item text="Emergency Contact">
        <div style={{marginLeft: '10px'}}>
          <em>
            <Item text={`${e.firstName} ${e.lastName}`} />
            <Item text="Phone: ">{e.phone}</Item>
            <Item text="Relation: ">{e.relation}</Item>
          </em>
        </div>
      </Item>
    </Panel>
  );
}
