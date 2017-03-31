import React from 'react';
import {ManageChild} from 'components/Form/ManageAccount/ManageChild';
import {Grid} from 'react-bootstrap';

export default function ManageChildView(props) {
  return (
    <Grid>
      <ManageChild childId={props.params.childId} />
    </Grid>
  );
}
