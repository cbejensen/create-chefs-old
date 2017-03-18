import React from 'react';
import AdminNavItem from './AdminNavItem';

export default function AdminNav(props) {
  const styles = {
    container: {
      backgroundColor: 'gray',
      padding: '5px 0',
    },
    item: {
      padding: '0 15px',
      cursor: 'pointer',
    },
  };
  const navItems = ['View Registrations', 'Create Classes'];
  return (
    <div style={styles.container}>
      {navItems.map((item, i) => (
        <AdminNavItem
          key={i}
          id={i}
          style={styles.item}
          handleClick={props.handleClick}
          text={item}
        />
      ))}
    </div>
  );
}
