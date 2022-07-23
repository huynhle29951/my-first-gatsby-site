// Step 1: Import React
import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

// Step 3: Export you component
export default AboutPage;
