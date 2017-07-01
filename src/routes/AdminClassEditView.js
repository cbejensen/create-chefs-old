import React from 'react';
import { ClassForm } from 'components/Admin/ClassForm';
import PageHeader from 'components/PageHeader';
import Loading from 'components/Loading';
import CheckAuth from 'components/CheckAuth';
import { browserHistory } from 'react-router';
import { Grid } from 'react-bootstrap';
import { formatDate } from 'utils/functions';
import * as firebase from 'firebase';
import { Helmet } from 'react-helmet';

class AdminClassEditView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookClass: null
    };
  }
  componentDidMount() {
    const id = this.props.params.id;
    this.listener = firebase
      .database()
      .ref(`classes/${id}`);
    this.listener.on('value', snap => {
      if (!snap) {
        browserHistory.push('admin');
      } else {
        console.log('class is:', snap.val());
        const cookClass = { ...snap.val() };
        cookClass.id = id;
        this.setState({ cookClass });
      }
    });
  }
  componentWillUnmount() {
    this.listener.off();
  }
  render() {
    if (this.state.cookClass === null) return <Loading />;
    const title = formatDate(this.state.cookClass.date);
    const subtitle = this.state.cookClass.theme;
    return (
      <div>
        <Helmet>
          <title>Admin</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <CheckAuth redirect noPass adminOnly>
          <Grid>
            <PageHeader title={title} subtitle={subtitle} />
            <ClassForm cookClass={this.state.cookClass} />
          </Grid>
        </CheckAuth>
      </div>
    );
  }
}

export default AdminClassEditView;
