// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout>
      <p>This is A paragrapgh text in About Page </p>
      <StaticImage
        alt="This is a image pulling from local file system"
        src="../images/icon.png"
      />
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

// Step 3: Export your component
export default AboutPage;
