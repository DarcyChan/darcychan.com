import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

import Header from 'components/header';

import 'scss/site.scss';

export default class Template extends React.Component {
    render() {
        const location = this.props.location.pathname;
        const pages = this.props.route.pages;
        return (
            <main>
                <Helmet
                    title={config.siteTitle}
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' }
                    ]}
                />
                <Header location={location} pages={pages} />
                <article className="body-content">
                    {this.props.children}
                </article>
            </main>
        );
    }
}
