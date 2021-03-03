import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Skill from 'sections/skill';
import AboutMe from 'sections/aboutme';
import Contact from 'sections/contact';
import Project from 'sections/project';
import Education from 'sections/education';
import Experience from 'sections/experience';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Ravelo Meva Soavina" />
        <Banner />
        <AboutMe />
        <Education />
        <Skill />
        <Experience />
        <Project />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}
