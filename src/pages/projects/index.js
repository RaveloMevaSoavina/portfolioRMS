import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from 'components/layout';
import SEO from 'components/seo';
import Project from 'sections/project';

function index() {
    return (
        <ThemeProvider theme={theme}>
                <SEO title="Ravelo Meva Soavina" />
                <Project />
    </ThemeProvider>
    )
}

export default index
