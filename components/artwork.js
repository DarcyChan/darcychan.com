import React from 'react';

import { combineClassNames } from 'utils';
import { PageTitle, PageSubtitle, PageContent, SmallLabel, Swatch } from 'components/common';

import 'scss/artwork.scss';

export default class Artwork extends React.Component {
    render() {
        const { className, title, data, children, ...props } = this.props;
        return (
            <PageContent className={combineClassNames('content-set', className)} {...props}>
                <PageTitle>
                    <SmallLabel className="page-title-label">
                        {data.category}
                    </SmallLabel>
                    {title ? title : data.title}
                </PageTitle>
                {children}
            </PageContent>
        )
    }
}

export class ArtworkInfoBlock extends React.Component {
    render() {
        const { className, children, ...props } = this.props;
        return (
            <div className={combineClassNames('artwork-info', className)} {...props}>
                {children}
            </div>
        )
    }
}

export class ArtworkBrand extends React.Component {
    render() {
        const { logo, colors, className, children, ...props } = this.props;
        const baseClassNames = logo && colors ? 'artwork-info-flex font-small' : 'font-small';
        return (
            <ArtworkInfoBlock className={combineClassNames(baseClassNames, className)} {...props}>
                {logo && 
                    <div className="artwork-info-logo">
                        <SmallLabel className="disabled">Logo</SmallLabel>
                        <img src={logo} />
                    </div>}
                {colors && 
                    <div className="artwork-info-colors">
                        <SmallLabel className="disabled">Colors</SmallLabel>
                        {colors.map(color => 
                            <Swatch key={color} color={color} />
                        )}
                    </div>}
                {children}
            </ArtworkInfoBlock>
        )
    }
}
