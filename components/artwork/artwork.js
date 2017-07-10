import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';

import { config } from 'config';
import { combineClassNames, getNextArtwork } from 'utils';
import {
    PageTitle,
    PageWrapper,
    PageFooter,
    SmallLabel
} from 'components/common';
import Icon, { Glyph } from 'components/icon';

import 'scss/artwork.scss';

const NextArtworkLink = ({ url, className, category, title, ...props }) => {
    return (
        <Link
            to={prefixLink(url)}
            className={combineClassNames(
                'preview-link preview-info',
                className
            )}
            {...props}
        >
            <span className="preview-subtitle">
                Next {category}
            </span>
            <span className="preview-title">
                <span className="preview-title-label">
                    {title}
                </span>
                <Icon
                    className="preview-title-arrow"
                    glyph={Glyph.ArrowRight}
                />
            </span>
        </Link>
    );
};

export default class Artwork extends React.Component {
    render() {
        const { className, title, route, children, ...props } = this.props;
        const data = route.page.data;
        const next = getNextArtwork(route, route.page);
        return (
            <PageWrapper
                className={combineClassNames('content-set', className)}
                {...props}
            >
                <Helmet title={`${data.title} | ${config.siteTitle}`} />
                <PageTitle>
                    <SmallLabel className="page-title-label">
                        {data.category}
                    </SmallLabel>
                    {title || data.title}
                </PageTitle>
                {children}
                {next &&
                    <PageFooter>
                        <NextArtworkLink
                            url={next.data.path}
                            category={next.data.category}
                            title={next.data.title}
                        />
                    </PageFooter>}
            </PageWrapper>
        );
    }
}
