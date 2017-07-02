import React from 'react';

export default class Link extends React.Component {
    render() {
        const { href, external, children, ...props } = this.props;
        return (
            <a 
                href={href}
                target={external && '_blank'}
                ref={external && 'noopener noreferrer'}
            >
                {children}
            </a>
        )
    }
}