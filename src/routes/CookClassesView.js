import React from 'react';
import CookClasses from 'components/CookClasses/CookClasses';
import { Helmet } from 'react-helmet';

export default function CookClassesView(props) {
  return (
    <div>
      <Helmet>
        <title>Classes</title>
        <meta
          name="description"
          content="See what cooking classes are available and register your kids today!"
        />
      </Helmet>
      <h1 className="text-center">Upcoming Classes</h1>
      <CookClasses />
    </div>
  );
}
