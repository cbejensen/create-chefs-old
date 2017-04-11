import React from 'react';
import {FirebaseListener} from 'components/FirebaseHelpers';
import FormWrapper from 'components/Form/FormWrapper';
import {ManageChild} from 'components/Form/ManageChild';
import {Grid} from 'react-bootstrap';
import './index.css';

export default function ManageChildView(props) {
  function getChildName(child) {
    return child.firstName + ' ' + child.lastName;
  }
  return (
    <FirebaseListener
      path={`children/${props.params.childId}`}
      transform={getChildName}
      passDataAs="title"
    >
      <FormWrapper>
        <Grid>
          <ManageChild className="ManageChild" childId={props.params.childId} />
        </Grid>
      </FormWrapper>
    </FirebaseListener>
  );
}
