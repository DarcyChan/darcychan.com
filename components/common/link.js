/*
    Link Component.
    A common component to render a basic list, with extra attributes if it is an external link.
*/

// External components
import React from 'react';

export default class Link extends React.Component {
    render() {
        const { href, external, children, ...props } = this.props;
        return (
            <a
                href={href}
                target={external && '_blank'}
                ref={external && 'noopener noreferrer'}
                {...props}
            >
                {children}
            </a>
        );
    }
}
