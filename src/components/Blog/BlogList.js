import React from 'react';
import {Link} from 'react-router';
import {Panel, Row, Col, Image} from 'react-bootstrap';

export default function BlogList(props) {
  const styles = {
    container: {
      margin: 'auto',
      padding: '30px',
      maxWidth: '700px',
    },
  };
  return (
    <div style={styles.container}>
      {props.list.map(post => {
        const title = <h2>{post.title}</h2>;
        return (
          <Link key={post.slug} to={`/blog/${post.slug}`}>
            <Panel key={post.slug} header={title}>
              <Row>
                <Col xs={3}>
                  <Image src={post.featured_image} rounded />
                </Col>
                <Col xs={9}>
                  {post.summary}
                </Col>
              </Row>
            </Panel>
          </Link>
        );
      })}
    </div>
  );
}
