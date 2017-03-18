import React from 'react';
import * as firebase from 'firebase';

class ViewRegistrations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {regs: null};
  }
  componentDidMount() {
    firebase
      .database()
      .ref('registrations')
      .once('value')
      .then(snap => {
        const data = snap.val();
        const arr = Object.keys(data).map(key => data[key]);
        this.setState({regs: arr});
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    if (!this.state.regs) return null;
    if (this.state.regs.length === 0)
      return <div>Sorry, there are no registrations to show!</div>;
    return (
      <div>
        {this.state.regs.map((reg, i) => <div key={i}>{reg.parent.name}</div>)};
      </div>
    );
  }
}

export default ViewRegistrations;
