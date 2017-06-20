import React from 'react';
import CookClassList from './CookClassList';
import Loading from 'components/Loading';
import * as firebase from 'firebase';

class CookClasses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: null,
      groups: null,
      loading: true
    };
  }
  componentDidMount() {
    this.classListener = firebase.database().ref('classes');
    this.groupListener = firebase
      .database()
      .ref('classGroups');
    this.getData(this.classListener, 'classes');
    this.getData(this.groupListener, 'groups');
  }
  componentWillUnmount() {
    this.classListener.off();
    this.groupListener.off();
  }
  getData(listener, stateAttr) {
    listener.on('value', snap => {
      if (!snap) {
        this.setState({
          [stateAttr]: false,
          loading: false
        });
        return;
      } else {
        this.setState({
          [stateAttr]: snap.val(),
          loading: false
        });
      }
    });
  }
  render() {
    if (
      this.state.loading ||
      this.state.classes === null
    ) {
      return <Loading />;
    } else if (
      !this.state.classes
    ) {
      return (
        <h3 style={{ textAlign: 'center' }}>
          There are no upcoming classes at this time. <br />
          Please check back later!
        </h3>
      );
    } else {
      return (
        <CookClassList
          classes={this.state.classes}
          groups={this.state.groups}
          isAdmin={this.props.isAdmin}
        />
      );
    }
  }
}

export default CookClasses;
