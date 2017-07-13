import React from 'react';

import { config } from 'config';
import { combineClassNames } from 'utils';
import { SmallLabel, Swatch } from 'components/common';
import { ArtworkInfoBlock } from 'components/artwork';

export default class ArtworkBrand extends React.Component {
    render() {
        const { logo, colors, className, children, ...props } = this.props;
        const baseClassNames =
            logo && colors ? 'artwork-info-flex font-small' : 'font-small';
        return (
            <ArtworkInfoBlock
                className={combineClassNames(baseClassNames, className)}
                {...props}
            >
                {logo &&
                    <div className="artwork-info-logo">
                        <SmallLabel className="disabled">Logo</SmallLabel>
                        <img
                            src={`${logo}?v=${config.version}`}
                            alt="Project Logo"
                        />
                    </div>}
                {colors &&
                    <div className="artwork-info-colors">
                        <SmallLabel className="disabled">
                            {`Brand Color${colors.length !== 1 ? 's' : ''}`}
                        </SmallLabel>
                        {colors.map(color =>
                            <Swatch key={color} color={color} />
                        )}
                    </div>}
                {children}
            </ArtworkInfoBlock>
        );
    }
}
