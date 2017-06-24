import React from 'react';
import CheckAuth from 'components/CheckAuth';
import { Admin } from 'components/Admin';
import { Grid } from 'react-bootstrap';

class AdminView extends React.Component {
  render() {
    return (
      <CheckAuth redirect noPass adminOnly>
        <Grid>
          <h2 className="text-center">Welcome, Jodie!</h2>
          <Admin />
        </Grid>
      </CheckAuth>
    );
  }
}

export default AdminView;
