import React from 'react';

import { getArtworksFromRoute } from 'utils';
import {
    PageJumbotron,
    PageTitle,
    PageLead,
    PageWrapper
} from 'components/page';
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
            <PageWrapper>
                <PageJumbotron>
                    <PageTitle>
                        Hello,<br />
                        I&apos;m Darcy Chan.
                    </PageTitle>
                    <PageLead>
                        I specialize in UI web development and design, with some
                        casual illustrating on the side.
                    </PageLead>
                </PageJumbotron>
                <PreviewList page={page} artworks={artworks} />
            </PageWrapper>
        );
    }
}
