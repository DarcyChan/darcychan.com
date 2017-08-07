/*
    Artwork Component.
    The component to display the details of the artwork.
*/

// External components
import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';

// Internal components
import { combineClassNames, getNextArtwork } from 'utils';
import { PageTitle, PageWrapper, PageFooter } from 'components/page';
import { Icon, Glyph, SmallLabel } from 'components/common';

// Link in the footer for the next artwork
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
                    glyph={Glyph.ArrowRight}
                    className="preview-title-arrow"
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
            <PageWrapper className={className} {...props}>
                <PageTitle>
                    <SmallLabel className="page-title-label">
                        <Link
                            className="page-title-link"
                            to={prefixLink(
                                route.pages.filter(
                                    page =>
                                        page.data.category === data.category &&
                                        page.data.showInMenu
                                )[0].data.path
                            )}
                        >
                            {data.category}
                        </Link>
                    </SmallLabel>
                    {title || data.title}
                </PageTitle>
                <div className="page-content content-set">
                    {children}
                </div>
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
