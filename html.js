import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';

import { config } from 'config';

const BUILD_TIME = new Date().getTime();

export default class HTML extends React.Component {
    static propTypes = {
        body: PropTypes.string
    };

    static defaultProps = {
        body: null
    };

    render() {
        const head = Helmet.rewind();
        const { body } = this.props;

        let css;
        if (process.env.NODE_ENV === 'production') {
            css = (
                <style
                    dangerouslySetInnerHTML={{
                        __html: require('!raw!./public/styles.css')
                    }}
                />
            );
        }

        let serviceWorker;
        if (process.env.NODE_ENV === 'production') {
            serviceWorker = (
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
                            if ('serviceWorker' in navigator) {
                                navigator.serviceWorker.register(
                                    '/service-worker.js'
                                );
                            }
                        `
                    }}
                />
            );
        }

        return (
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    {head.title.toComponent()}
                    {head.meta.toComponent()}
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href={`/apple-touch-icon.png?v=${config.version}`}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href={`/favicon-32x32.png?v=${config.version}`}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href={`/favicon-16x16.png?v=${config.version}`}
                    />
                    <link
                        rel="shortcut icon"
                        type="image/x-icon"
                        href={`/favicon.ico?v=${config.version}`}
                    />
                    <link rel="manifest" href="/manifest.json" />
                    <link
                        rel="mask-icon"
                        href={`/safari-pinned-tab.svg?v=${config.version}`}
                        color="#e74c3c"
                    />
                    <meta
                        name="apple-mobile-web-app-title"
                        content="Darcy Chan"
                    />
                    <meta name="application-name" content="Darcy Chan" />
                    <meta name="theme-color" content="#fefffd" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700"
                        rel="stylesheet"
                    />
                    {css}
                </head>
                <body>
                    <div
                        id="react-mount"
                        dangerouslySetInnerHTML={{ __html: this.props.body }}
                    />
                    <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
                    {serviceWorker}
                </body>
            </html>
        );
    }
}
