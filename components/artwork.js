import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';

import { config } from 'config';
import { combineClassNames, getNextArtwork } from 'utils';
import { PageTitle, PageSubtitle, PageWrapper, PageFooter, SmallLabel, Swatch } from 'components/common';
import Icon, { Glyph } from 'components/icon';

import 'scss/artwork.scss';

class NextArtworkLink extends React.Component {
    render() {
        const { url, className, category, title, ...props } = this.props;
        return (
            <Link to={prefixLink(url)} className={combineClassNames('preview-link preview-info', className)}>
                <span className="preview-subtitle">
                    Next {category}
                </span>
                <span className="preview-title">
                    <span className="preview-title-label">{title}</span>
                    <Icon className="preview-title-arrow" glyph={Glyph.ArrowRight} />
                </span>
            </Link>
        )
    }
}

export default class Artwork extends React.Component {
    render() {
        const { className, title, route, children, ...props } = this.props;
        const data = route.page.data;
        const next = getNextArtwork(route, route.page);
        return (
            <PageWrapper className={combineClassNames('content-set', className)} {...props}>
                <Helmet title={`${data.title} | ${config.siteTitle}`} />
                <PageTitle>
                    <SmallLabel className="page-title-label">
                        {data.category}
                    </SmallLabel>
                    {title ? title : data.title}
                </PageTitle>
                {children}
                {next && 
                    <PageFooter>
                        <NextArtworkLink
                            url={next.data.path}
                            category={next.data.category}
                            title={next.data.title} />
                    </PageFooter>}
            </PageWrapper>
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
                        <SmallLabel className="disabled">
                            {`Brand Color${colors.length !== 1 ? 's' : ''}`}
                        </SmallLabel>
                        {colors.map(color => 
                            <Swatch key={color} color={color} />
                        )}
                    </div>}
                {children}
            </ArtworkInfoBlock>
        )
    }
}
