import React from 'react';
import { GroupForm } from 'components/Admin/GroupForm';
import PageHeader from 'components/PageHeader';
import Loading from 'components/Loading';
import CheckAuth from 'components/CheckAuth';
import { browserHistory } from 'react-router';
import { Grid } from 'react-bootstrap';
import { formatDate } from 'utils/functions';
import * as firebase from 'firebase';

class AdminGroupEditView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      group: null
    };
  }
  componentDidMount() {
    const id = this.props.params.id;
    this.listener = firebase
      .database()
      .ref(`classGroups/${id}`);
    this.listener.on('value', snap => {
      if (!snap) {
        browserHistory.push('admin');
      } else {
        const group = { ...snap.val() };
        group.id = id;
        this.setState({ group });
      }
    });
  }
  componentWillUnmount() {
    this.listener.off();
  }
  render() {
    if (!this.state.group) return <Loading />;
    const info = this.state.group;
    console.log(info);
    return (
      <CheckAuth redirect noPass adminOnly>
        <Grid>
          <PageHeader
            title={info.theme}
            subtitle={info.subtitle}
          />
          <GroupForm group={info} />
        </Grid>
      </CheckAuth>
    );
  }
}

export default AdminGroupEditView;
