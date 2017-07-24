/*
    Image Component.
    The component that renders one a combination of the following:
    - A responsive image using srcSet and sizes.
    - An image with a lazyloading wrapper and set height.
    - A basic image.
*/

import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import LazyLoad from 'react-lazyload';

import { config } from 'config';
import { combineClassNames, constants } from 'utils';

// Responsive image with srcset and size
const ResponsiveImage = ({
    src,
    srcSet,
    width,
    height,
    sizes,
    alt,
    ...props
}) => {
    const extIndex = src.lastIndexOf('.');
    const name = src.substr(0, extIndex);
    const ext = src.substr(extIndex, src.length - 1);

    return (
        <img
            srcSet={
                srcSet ||
                `${name}${ext}?v=${config.version} ${width}w, ${name}@2x${ext}?v=${config.version} ${width *
                    2}w`
            }
            src={prefixLink(`${src}?v=${config.version}`)}
            sizes={
                sizes ||
                `(min-width: ${constants.breakpoint.md}px) ${width}px, 100vw`
            }
            alt={alt}
            {...props}
        />
    );
};

// Regular image with no special properties
const SingleImage = ({ src, alt, ...props }) => {
    return (
        <img
            src={prefixLink(`${src}?v=${config.version}`)}
            alt={alt}
            {...props}
        />
    );
};

// Determine whether to use responsive images based on props
const BaseImage = ({
    className,
    shadow,
    responsive,
    width,
    height,
    sizes,
    srcSet,
    ...props
}) => {
    const classNames = shadow
        ? combineClassNames('image-shadow', className)
        : className;
    if (responsive) {
        return (
            <ResponsiveImage
                className={classNames}
                width={width}
                height={height}
                sizes={sizes}
                srcSet={srcSet}
                {...props}
            />
        );
    }
    return <SingleImage className={classNames} {...props} />;
};

// Lazy loading image
const LazyImage = ({
    src,
    srcSet,
    alt,
    shadow,
    className,
    width,
    height,
    responsive,
    sizes,
    ...props
}) => {
    return (
        <div
            className={combineClassNames('lazy-image-wrapper', className)}
            style={{ paddingBottom: `${height / width * 100}%` }}
            {...props}
        >
            <LazyLoad height="100%" offset={height || 1440} once>
                <BaseImage
                    className={
                        shadow ? 'lazy-image image-shadow' : 'lazy-image'
                    }
                    src={src}
                    srcSet={srcSet}
                    alt={alt}
                    width={width}
                    height={height}
                    responsive={responsive}
                    sizes={sizes}
                />
            </LazyLoad>
        </div>
    );
};

class Image extends React.Component {
    render() {
        const { lazyLoad, responsive, ...props } = this.props;
        if (lazyLoad) {
            return <LazyImage responsive={responsive} {...props} />;
        }
        return <BaseImage {...props} />;
    }
}

Image.defaultProps = {
    lazyLoad: true,
    responsive: true,
    shadow: true,
    width: 1328,
    height: 821
};

export default Image;
