import React from 'react';
import LazyLoad from 'react-lazyload';

import { config } from 'config';
import { combineClassNames } from 'utils';
import 'scss/images.scss';

const BaseImage = props => {
    const { 
        src, 
        alt, 
        shadow, 
        className, 
        ...otherProps } = props;
    const defaultClassNames = (shadow ? 'image-shadow' : '');
    return (
        <img 
            src={`${src}?v=${config.version}`}
            alt={alt}
            className={combineClassNames(defaultClassNames, className)}
            {...otherProps} />
    )
}

const LazyImage = props => {
    const { 
        src, 
        alt, 
        shadow,
        className, 
        height,
        ...otherProps } = props;
    return (
        <div 
            className={combineClassNames('lazy-image-wrapper', className)}
            style={{paddingBottom: height}}
            {...otherProps}
        >
            <LazyLoad 
                height='100%'
                offset={1000}
                once
            >
                <BaseImage
                    className={shadow ? 'lazy-image image-shadow' : 'lazy-image'}
                    src={`${src}?v=${config.version}`}
                    alt={alt} />
            </LazyLoad>
        </div>
    )
}

class Image extends React.Component {
    render() {
        const { lazyLoad, ...props } = this.props;
        if (lazyLoad) {
            return <LazyImage {...props} />
        }
        return (
            <BaseImage {...props} />
        )
    }
}

Image.defaultProps = {
    lazyLoad: true,
    shadow: true,
}

export default Image;
