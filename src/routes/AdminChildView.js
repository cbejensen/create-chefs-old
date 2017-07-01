import React from 'react';
import CheckAuth from 'components/CheckAuth';
import { ChildInfo } from 'components/Admin/ChildInfo';
import { FirebaseListener } from 'components/FirebaseCustom';
import { Grid } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

export default function AdminChildView(props) {
  const styles = {
    grid: {
      maxWidth: '500px'
    }
  };
  return (
    <div>
      <Helmet>
        <title>Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <CheckAuth redirect noPass adminOnly>
        <Grid style={styles.grid}>
          <FirebaseListener
            path={`children/${props.params.id}`}
            passDataAs="child"
          >
            <ChildInfo />
          </FirebaseListener>
        </Grid>
      </CheckAuth>
    </div>
  );
}
