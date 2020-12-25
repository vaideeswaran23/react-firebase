import React from 'react';

import { withAuthorization } from '../Session';

const HomePage = () => (
  <section className="hero is-medium is-primary is-bold">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          HomePage
        </h1>
        <h2 className="subtitle">
          HomePage is accessible by every logged in user
        </h2>
      </div>
    </div>
  </section>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);