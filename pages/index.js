import React from 'react'

import { getArtworksFromRoute } from 'utils/artwork';
import { config } from 'config';
import { PageTitle, PageSubtitle, PageContent } from 'components/common';
import PreviewList from 'components/previewList';

export default class Index extends React.Component {
    render() {
        const route = this.props.route;
        const pages = this.props.route.pages.filter(page => page.data.type === 'artwork');
        const page = route.page.data;
        const artworks = getArtworksFromRoute(route);

        return (
            <PageContent className="content-set">
                <header>
                    <PageTitle>
                        Hello,<br />
                        I'm Darcy Chan.
                    </PageTitle>
                    <PageSubtitle>
                        I specialize in front-end development and design, and illustrate on the side.
                    </PageSubtitle>
                </header>
                <PreviewList page={page} artworks={artworks} />
            </PageContent>
        )
    }
}
