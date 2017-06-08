import React from 'react';
import {Grid} from 'react-bootstrap';

export default function BlogPost(props) {
  const post = props.post;
  return (
    <Grid>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.body}} />
    </Grid>
  );
}
