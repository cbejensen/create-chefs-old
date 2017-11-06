import React from 'react';

class LightboxControls extends React.PureComponent {
  // TODO: Prevent this from re-rendering on image change
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('mounted');
  }
  render() {
    console.log('rendered');
    const styles = {
      controlWrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
      },
      control: {
        border: 0,
        background: 'none',
        padding: '10px 30px',
        fontSize: '10vmin',
        textShadow: '3px 3px 3px black'
      }
    };
    return (
      <div style={styles.controlWrap}>
        <button onClick={e => this.props.prev(e)} style={styles.control}>
          &#60;
        </button>
        <button onClick={this.props.hide} style={styles.control}>
          X
        </button>
        <button onClick={e => this.props.next(e)} style={styles.control}>
          &#62;
        </button>
      </div>
    );
  }
}

export default LightboxControls;
