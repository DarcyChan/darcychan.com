/*
    Artwork Brand Component.
    The component that displays the artwork's logo and colour swatches.
*/

// External components
import React from 'react';
import { prefixLink } from 'gatsby-helpers';

// Internal components
import { config } from 'config';
import { combineClassNames } from 'utils';
import { SmallLabel, Swatch } from 'components/common';

export default class ArtworkBrand extends React.Component {
    render() {
        const { logo, colors, className, children, ...props } = this.props;
        return (
            <div
                className={combineClassNames('image-shadow', className)}
                {...props}
            >
                <div className="image-header">
                    <SmallLabel className="text-center disabled">
                        Branding
                    </SmallLabel>
                </div>
                <div className="content-padded content-set-sm text-center">
                    {logo &&
                        <div className="artwork-info-logo">
                            <img
                                src={prefixLink(`${logo}?v=${config.version}`)}
                                alt="Project Logo"
                            />
                        </div>}
                    {colors &&
                        <div className="artwork-info-colors font-small">
                            {colors.map(color =>
                                <Swatch key={color} color={color} />
                            )}
                        </div>}
                    {children}
                </div>
            </div>
        );
    }
}
