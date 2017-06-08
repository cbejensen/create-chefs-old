import React from 'react';
import {BlogPost} from 'components/Blog';

export default function BlogPostView(props) {
  return <BlogPost slug={props.params.slug} />;
}
