import React from 'react';
import CheckAuth from 'components/CheckAuth';
import { Admin } from 'components/Admin';
import { Grid } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

class AdminView extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Admin</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <CheckAuth redirect noPass adminOnly>
          <Grid>
            <Helmet>
              <title>Admin</title>
              <meta
                name="robots"
                content="noindex, nofollow"
              />
            </Helmet>
            <h2 className="text-center">Welcome, Jodie!</h2>
            <Admin />
          </Grid>
        </CheckAuth>
      </div>
    );
  }
}

export default AdminView;
