import React from 'react';
import {Admin} from 'components/Admin';
import {Grid} from 'react-bootstrap';

class AdminView extends React.Component {
  render() {
    return (
      <Grid>
        <Admin />
      </Grid>
    );
  }
}

export default AdminView;
