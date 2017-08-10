import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

import Header from 'components/header';

import 'scss/site.scss';

export default class Template extends React.Component {
    render() {
        const location = this.props.location.pathname;
        const pages = this.props.route.pages;
        const page = pages.filter(page => page.path === location)[0];
        let data;
        if (page) {
            data = pages.filter(page => page.path === location)[0].data;
        }
        return (
            <main>
                <Helmet>
                    <title>
                        {data && data.title
                            ? `${data.title} | ${config.siteTitle}`
                            : config.siteTitle}
                    </title>
                    <meta
                        name="description"
                        content={
                            (data && data.description) || config.description
                        }
                    />
                    <meta
                        name="keywords"
                        content={
                            data && data.keywords
                                ? `${data.keywords}, ${config.keywords}`
                                : config.keywords
                        }
                    />
                </Helmet>
                <Header location={location} pages={pages} />
                {this.props.children}
            </main>
        );
    }
}
