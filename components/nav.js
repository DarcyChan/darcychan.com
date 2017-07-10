import React from 'react';
import { Link, IndexLink } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import 'scss/navigation.scss';

// GatsbyJS does not add the activeClassName to child routes, so we do it manually.
// See: https://github.com/gatsbyjs/gatsby/issues/677
const setClassNames = (link, location) => {
    const base = 'menu-item';

    if (location.startsWith(link)) {
        return `${base} active`;
    }

    return base;
};

export default class Nav extends React.Component {
    render() {
        const {
            className,
            location,
            pages,
            handleMenuToggle,
            ...props
        } = this.props;

        return (
            <nav className={`page-nav ${className}`} {...props}>
                <ul className="menu">
                    <li>
                        <IndexLink
                            onClick={() => handleMenuToggle('collapse')}
                            to={prefixLink('/')}
                            className="menu-item"
                            activeClassName="active"
                        >
                            Home
                        </IndexLink>
                    </li>
                    {pages.map(page =>
                        <li key={page.data.category}>
                            <Link
                                onClick={() => handleMenuToggle('collapse')}
                                to={prefixLink(page.data.path)}
                                className={setClassNames(
                                    page.data.path,
                                    location
                                )}
                                activeClassName="active"
                            >
                                {page.data.title}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        );
    }
}
