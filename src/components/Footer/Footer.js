import React from 'react';

export default function Footer(props) {
  const styles = {
    footer: {
      height: '120px',
      position: 'relative',
      textAlign: 'center',
      color: '#959595',
      backgroundColor: '#191926',
      padding: '10px 0'
    },
    info: {
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  };
  return (
    <footer style={styles.footer}>
      <div style={styles.info}>
        Create Chefs 2017
        <div>
          <strong>
            <div><a href="tel:801-856-2768">801-856-2768</a></div>
            <a href="mailto:createclasses@gmail.com">
              createclasses@gmail.com
            </a>
          </strong>
        </div>
        <div>6119 Don Leone Drive</div>
        <div>Taylorsville, UT 84118</div>
      </div>
    </footer>
  );
}
