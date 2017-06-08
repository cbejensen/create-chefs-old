import React from 'react';
import {Blog} from 'components/Blog';

export default function BlogHome(props) {
  return <Blog page={props.params.page} />;
}
