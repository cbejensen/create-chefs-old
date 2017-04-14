import React from 'react';
import ChildBox from './ChildBox';
import FirebaseListener from 'components/FirebaseCustom/FirebaseListener';

class ChildBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {childIds: this.props.childIds};
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.childIds !== this.props.childIds)
      this.setState({childIds: nextProps.childIds});
  }
  render() {
    if (!this.state.childIds || this.state.childIds.length === 0)
      return <div>There are no children set up on your account yet.</div>;
    const childIds = Object.keys(this.state.childIds).map(
      id => this.state.childIds[id],
    );
    return (
      <div style={{marginBottom: '10px'}}>
        {childIds.map(id => {
          return (
            <FirebaseListener key={id} path={`children/${id}`} passDataAs="child">
              <ChildBox id={id} />
            </FirebaseListener>
          );
        })}
      </div>
    );
  }
}

export default ChildBoxes;
