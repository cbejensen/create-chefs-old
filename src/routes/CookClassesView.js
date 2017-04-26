import React from 'react';
import CookClasses from 'components/CookClasses/CookClasses';

export default function CookClassesView(props) {
  return (
    <div>
      <h1 className="text-center">Upcoming Classes</h1>
      <CookClasses />
    </div>
  );
}
