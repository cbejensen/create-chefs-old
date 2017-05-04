import React from 'react';

export default function Footer(props) {
  const styles = {
    footer: {
      height: '70px',
      textAlign: 'center',
      paddingTop: '10px',
      backgroundColor: '#191926',
    },
    info: {
      textAlign: 'right',
      paddingRight: '15px',
      color: '#959595',
    },
  };
  return (
    <footer style={styles.footer}>
      <div style={styles.info}>
        <div>
          Phone: <strong>801-856-2768</strong>
        </div>
        <div>
          E-mail:
          {' '}
          <strong>
            <a href="mailto:createclasses@gmail.com">createclasses@gmail.com</a>
          </strong>
        </div>
      </div>
    </footer>
  );
}
