import React from 'react'
import sortBy from 'lodash/sortBy';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { config } from 'config'

import { constants } from 'utils'
import Header from 'components/header'

import 'scss/site.scss';

export default class Template extends React.Component {
    static propTypes = {
        children: PropTypes.any
    }

    constructor(props) {
        super(props);
        this.state = {
            menuVisible: false
        }
        this.handleMenuToggle = this.handleMenuToggle.bind(this);
    }

    handleMenuToggle= (toggle) => {
        if (window.innerWidth < constants.breakpoint.md) {
            const scrollEl = document.getElementsByTagName('html')[0];
            if (toggle) {
                if (toggle === 'open') {
                    this.setState({ menuVisible: true });
                    scrollEl.classList.add('menu-open');
                }
                else if (toggle === 'collapse') {
                    this.setState({ menuVisible: false });
                    scrollEl.classList.remove('menu-open');
                }
            }
            else if (this.state.menuVisible) {
                this.setState({ menuVisible: false });
                scrollEl.classList.remove('menu-open');
            } else {
                this.setState({ menuVisible: true });
                scrollEl.classList.add('menu-open');
            }
        }

        // Blur active element to remove focus styles after click
        document.activeElement.blur();
    }

    render() {
        const location = this.props.location.pathname;
        const pages = this.props.route.pages;
        return (
            <main>
                <Helmet
                    title={config.siteTitle}
                    meta={[
                        { name: "description", content: "Sample" },
                        { name: "keywords", content: "sample, something" },
                    ]}
                />
                <Header location={location} 
                        pages={pages}
                        handleMenuToggle={toggle => this.handleMenuToggle(toggle)} 
                        menuVisible={this.state.menuVisible} />
                <article className="body-content">
                    {this.props.children}
                </article>
            </main>
        )
    }
}
