/*
    Header Component.
    The header displayed on all pages.
*/

// External components
import React from 'react';
import sortBy from 'lodash/sortBy';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { Motion, spring } from 'react-motion';

// Internal components
import { constants } from 'utils';
import Nav from 'components/nav';
import { Icon, Glyph } from 'components/common';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuVisible: false
        };
        this.handleMenuToggle = this.handleMenuToggle.bind(this);
    }

    handleMenuToggle = toggle => {
        if (window.innerWidth < constants.breakpoint.md) {
            const scrollEl = document.getElementsByTagName('html')[0];
            if (toggle) {
                if (toggle === 'open') {
                    this.setState({ menuVisible: true });
                    scrollEl.classList.add('menu-open');
                } else if (toggle === 'collapse') {
                    this.setState({ menuVisible: false });
                    scrollEl.classList.remove('menu-open');
                }
            } else if (this.state.menuVisible) {
                this.setState({ menuVisible: false });
                scrollEl.classList.remove('menu-open');
            } else {
                this.setState({ menuVisible: true });
                scrollEl.classList.add('menu-open');
            }
        }

        // Blur active element to remove focus styles after click
        document.activeElement.blur();
    };

    render() {
        const { location, pages } = this.props;

        const menuItems = sortBy(pages, page => page.data.id).filter(
            page => page.data.showInMenu === true
        );

        let currentCategory = pages.filter(page => page.path === location)[0];
        let currentCategoryLink = null;
        if (currentCategory) {
            currentCategory = currentCategory.data.category;
            currentCategoryLink = menuItems.filter(
                page => page.data.category === currentCategory
            )[0];
        }

        return (
            <header className="page-header">
                <h1 className="page-brand-wrapper">
                    <Link
                        className="brand page-brand"
                        to={prefixLink('/')}
                        onClick={() => this.handleMenuToggle('collapse')}
                    >
                        <Icon glyph={Glyph.Logo} className="page-brand-logo" />
                        <span>
                            <span className="page-brand-title">
                                {config.siteTitle}
                            </span>
                            <span className="page-brand-subtitle">
                                {config.siteSubTitle}
                            </span>
                        </span>
                    </Link>
                    {currentCategory &&
                        !this.state.menuVisible &&
                        <Link
                            className="page-brand page-brand-category"
                            to={prefixLink(currentCategoryLink.path)}
                            onClick={() => this.handleMenuToggle('collapse')}
                        >
                            <span className="page-brand-label">
                                {currentCategoryLink.data.title}
                            </span>
                        </Link>}
                    {this.state.menuVisible &&
                        <span className="page-brand page-brand-category disabled">
                            <span className="page-brand-label">Menu</span>
                        </span>}
                    <button
                        className={`page-nav-toggle ${this.state.menuVisible
                            ? 'opened'
                            : 'closed'}`}
                        type="button"
                        onClick={() => this.handleMenuToggle()}
                    >
                        <span className="close">
                            Close
                            <Icon glyph={Glyph.Close} />
                        </span>
                        <span className="open">
                            Menu
                            <Icon glyph={Glyph.Menu} />
                        </span>
                    </button>
                </h1>

                <Motion
                    style={{
                        x: spring(this.state.menuVisible ? 1 : 0, {
                            stiffness: 300,
                            damping: 30
                        })
                    }}
                >
                    {({ x }) =>
                        <div
                            className="page-nav-overlay"
                            style={{
                                display: x === 0 ? 'none' : 'block',
                                opacity: x
                            }}
                        />}
                </Motion>

                <Motion
                    style={{
                        x: spring(this.state.menuVisible ? 0 : -100, {
                            stiffness: 300,
                            damping: 30
                        })
                    }}
                >
                    {({ x }) =>
                        <Nav
                            className={
                                this.state.menuVisible ? 'page-nav-open' : ''
                            }
                            location={location}
                            pages={menuItems}
                            handleMenuToggle={this.handleMenuToggle}
                            style={{
                                display: x === -100 ? 'none' : 'block',
                                WebkitTransform: `translate(0, ${x}%)`,
                                transform: `translate(0, ${x}%)`
                            }}
                        />}
                </Motion>
            </header>
        );
    }
}
