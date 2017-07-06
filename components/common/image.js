import React from 'react';
import LazyLoad from 'react-lazyload';

import { config } from 'config';
import { combineClassNames, constants } from 'utils';
import 'scss/images.scss';

// Responsive image with srcset
const ResponsiveImage = ({
    src,
    width,
    height,
    sizes,
    ...props
}) => {
    const extIndex = src.lastIndexOf('.');
    const name = src.substr(0, extIndex);
    const ext = src.substr(extIndex, src.length - 1);

    return (
        <img
            srcSet={
                `${name}${ext}?v=${config.version} ${width / 2}w, 
                    ${name}@2x${ext}?v=${config.version} ${width}w`
            }
            src={`${src}?v=${config.version}`}
            sizes={
                sizes ||
                    `(min-width: ${constants.breakpoint.md}px)
                        calc(100vw - ${parseInt(constants.menuWidth) + parseInt(constants.gutter) * 2}rem), 100vw`
            }
            {...props} />
    )
}

// Regular image
const SingleImage = ({
    src,
    ...props
}) => {
    return (
        <img src={`${src}?v=${config.version}`} {...props} />
    )
}

// Determine whether to use responsive images based on props
const BaseImage = ({
    className,
    shadow,
    responsive,
    ...props
}) => {
    const classNames = combineClassNames(shadow ? 'image-shadow' : '', className);
    if (responsive) {
        return (
            <ResponsiveImage className={classNames} {...props} />
        )
    }
    return (
        <SingleImage className={classNames} {...props} />
    )
}

// Lazy loading image
const LazyImage = ({
    src,
    alt,
    shadow,
    className,
    width,
    height,
    responsive,
    ...props
}) => {
    return (
        <div 
            className={combineClassNames('lazy-image-wrapper', className)}
            style={{paddingBottom: `${height / width * 100}%`}}
            {...props}
        >
            <LazyLoad 
                height='100%'
                offset={height || 1000}
                once
            >
                <BaseImage
                    className={shadow ? 'lazy-image image-shadow' : 'lazy-image'}
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    responsive={responsive} />
            </LazyLoad>
        </div>
    )
}

class Image extends React.Component {
    render() {
        const { lazyLoad, responsive, ...props } = this.props;
        if (lazyLoad) {
            return <LazyImage responsive={responsive} {...props} />
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
