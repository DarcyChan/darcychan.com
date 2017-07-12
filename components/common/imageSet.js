import React from 'react';

import { Image } from 'components/common';

export default class ImageSet extends React.Component {
    render() {
        const { images, alt, width, height, ...props } = this.props;
        return (
            <div className="image-set image-shadow" {...props}>
                {images.map(image =>
                    <Image
                        key={image}
                        src={image}
                        alt={alt}
                        width={width}
                        height={height}
                        shadow={false}
                    />
                )}
            </div>
        );
    }
}
