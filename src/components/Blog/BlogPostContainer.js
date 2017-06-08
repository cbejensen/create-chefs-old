import React from 'react';
import BlogPost from './BlogPost';
import Butter from 'buttercms';
import './index.css';

const butter = Butter('5183eaf76c21f1e4f0f827e52ec5da31300489b3');

class BlogPostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }
  componentWillMount() {
    console.log(this.props);
    let slug = this.props.slug;
    console.log(slug);
    butter.post.retrieve(slug).then(resp => {
      this.setState({
        loaded: true,
        post: resp.data.data,
      });
    });
  }
  render() {
    if (this.state.loaded) {
      return <BlogPost post={this.state.post} />;
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}

export default BlogPostContainer;
