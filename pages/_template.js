import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

import Header from 'components/header';

import 'scss/site.scss';

export default class Template extends React.Component {
    render() {
        const location = this.props.location.pathname;
        const pages = this.props.route.pages;
        const data = pages.filter(page => page.path === location)[0].data;
        return (
            <main>
                <Helmet
                    title={
                        data.title
                            ? `${data.title} | ${config.siteTitle}`
                            : config.siteTitle
                    }
                    meta={[
                        {
                            name: 'description',
                            content: data.description || config.description
                        },
                        {
                            name: 'keywords',
                            content: data.keywords
                                ? `${data.keywords}, ${config.keywords}`
                                : config.keywords
                        }
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
