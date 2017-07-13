import React from 'react';

import { getArtworksFromRoute } from 'utils';
import { PageTitle, PageSubtitle, PageWrapper } from 'components/page';
import { PreviewList } from 'components/preview';

export default class Index extends React.Component {
    render() {
        const route = this.props.route;
        const page = route.page.data;

        let artworks = [];
        artworks = artworks.concat(
            getArtworksFromRoute(route, 'project'),
            getArtworksFromRoute(route, 'design'),
            getArtworksFromRoute(route, 'illustration')
        );

        return (
            <PageWrapper className="content-set">
                <header>
                    <PageTitle>
                        Hello,<br />
                        I&apos;m Darcy Chan.
                    </PageTitle>
                    <PageSubtitle>
                        I specialize in front end web development and design,
                        with some casual illustrating on the side.
                    </PageSubtitle>
                </header>
                <PreviewList page={page} artworks={artworks} />
            </PageWrapper>
        );
    }
}
