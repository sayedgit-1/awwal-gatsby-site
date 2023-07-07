// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout>
      <p>This is A paragrapgh text </p>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

// Step 3: Export your component
export default AboutPage;
