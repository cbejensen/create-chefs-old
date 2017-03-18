import React from 'react';
import {Grid} from 'react-bootstrap';

class RegConfirmationView extends React.Component {
  render() {
    return (
      <Grid>
        <h1>Thank you!</h1>
        <h4>Your registration has been successfully submitted. We will reach out to you shortly via the contact information provided to confirm all the details.</h4>
      </Grid>
    )
  }
};

export default RegConfirmationView;
