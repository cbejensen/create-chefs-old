import React from 'react';
import BlogList from './BlogList';
import Butter from 'buttercms';
import {Link} from 'react-router';
import './index.css';

const butter = Butter('5183eaf76c21f1e4f0f827e52ec5da31300489b3');

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }
  fetchPosts(page) {
    butter.post.list({page: page, page_size: 10}).then(resp => {
      this.setState({
        loaded: true,
        resp: resp.data,
      });
    });
  }
  componentWillMount() {
    let page = this.props.page || 1;
    this.fetchPosts(page);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({loaded: false});
    let page = nextProps.page || 1;
    this.fetchPosts(page);
  }

  render() {
    if (this.state.loaded) {
      const {next_page, previous_page} = this.state.resp.meta;
      return (
        <div>
          <BlogList list={this.state.resp.data} />

          <br />

          <div>
            {previous_page && <Link to={`blog/p/${previous_page}`}>Prev</Link>}

            {next_page && <Link to={`blog/p/${next_page}`}>Next</Link>}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}

export default Blog;
