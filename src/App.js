import React from 'react';
import { Nav, NavLarge, SideNav } from './components/Nav';
import CheckAuth from 'components/CheckAuth';
import { Footer } from './components/Footer';
import { browserHistory } from 'react-router';
import { Helmet } from 'react-helmet';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNav: false
    };
    this.toggleSideNav = this.toggleSideNav.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }
  toggleSideNav() {
    this.setState({
      sideNav: !this.state.sideNav
    });
  }
  showInfo() {
    browserHistory.push('/about');
  }
  render() {
    const styles = {
      content: this.state.sideNav
        ? 'App-content App-show-side-nav'
        : 'App-content'
    };
    return (
      <div className="App-wrapper">
        <Helmet
          defaultTitle="Create Chefs | Cooking Classes"
          titleTemplate="%s | Create Chefs"
        >
          <meta
            name="description"
            content="Our cooking classes offer a great way for parents to take a break while their children learn the talents and joys of being creative in the kitchen"
          />
          <link
            rel="canonical"
            href="https://createchefs.com"
          />
          <meta
            property="og:type"
            content="business.business"
          />
          <meta
            property="og:title"
            content="Create Chefs"
          />
          <meta
            property="og:url"
            content="createchefs.com"
          />
          <meta
            property="og:image"
            content="createchefs.com/static/media/logo-chef.ca69eddf.png"
          />
          <meta
            property="business:contact_data:street_address"
            content="6119 Don Leone Dr"
          />
          <meta
            property="business:contact_data:locality"
            content="Taylorsville"
          />
          <meta
            property="business:contact_data:region"
            content="UT"
          />
          <meta
            property="business:contact_data:postal_code"
            content="84118"
          />
          <meta
            property="business:contact_data:country_name"
            content="USA"
          />
        </Helmet>
        <div className={styles.content}>
          <CheckAuth>
            <SideNav toggleSideNav={this.toggleSideNav} />
          </CheckAuth>
          <Nav
            toggleSideNav={this.toggleSideNav}
            showInfo={this.showInfo}
          />
          <CheckAuth>
            <NavLarge />
          </CheckAuth>
          <main
            onClick={
              this.state.sideNav && this.toggleSideNav
            }
            className="App-main"
            ref={e => {
              this.main = e;
            }}
          >
            {this.props.children}
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
