import React from 'react';
import { browserHistory } from 'react-router';
import * as firebase from 'firebase';

class CheckAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { uid: null };
  }
  componentDidMount() {
    this.removeAuthListener = firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          // pass user ID to children
          console.log('user legit');
          this.setState({ uid: user.uid });
        } else if (!this.props.redirect) {
          // pass false to children
          console.log('user NOT');
          this.setState({ uid: false });
        } else {
          // if redirect is string path, go there
          // otherwise redirect to sign-in page
          console.log('user NOT and redirect NOT');
          const path = typeof this.props.redirect ===
            'string'
            ? this.props.redirect
            : '/sign-in';
          browserHistory.push(path);
        }
      });
  }
  componentWillUnmount() {
    this.removeAuthListener();
  }
  render() {
    if (this.state.uid === null) return null;
    const props = { ...this.props, uid: this.state.uid };
    // const test =
    // console.log(test);
    return (
      <div>
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, props)
        )}
      </div>
    );

    // if (Array.isArray(this.props.children)) {
    //   return (
    //     <div>
    //       {this.props.children.map}
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>
    //       {React.cloneElement(this.props.children, props)}
    //     </div>
    //   );
    // }
  }
}

export default CheckAuth;
