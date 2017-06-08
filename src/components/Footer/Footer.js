import React from 'react';

export default function Footer(props) {
  const styles = {
    footer: {
      height: '90px',
      position: 'relative',
      textAlign: 'center',
      color: '#959595',
      backgroundColor: '#191926',
      padding: '10px 0',
    },
    info: {
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  };
  return (
    <footer style={styles.footer}>
      <div style={styles.info}>
        Create Chefs 2017
        <div>
          <strong>
            <div>801-856-2768</div>
            <a href="mailto:createclasses@gmail.com">createclasses@gmail.com</a>
          </strong>
        </div>
      </div>
    </footer>
  );
}
