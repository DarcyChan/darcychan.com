import React from 'react';

import { config } from 'config';

export default class Image extends React.Component {
    render() {
        const { src, alt, className, ...props } = this.props;
        return (
            <img 
                src={`${src}?v=${config.version}`} 
                className={className} 
                alt={alt}
                {...props} />
        )
    }
}