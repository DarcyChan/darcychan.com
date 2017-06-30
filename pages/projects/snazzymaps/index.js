import React from 'react';
import Helmet from 'react-helmet';

import { config } from 'config';
import Artwork, { ArtworkBrand, ArtworkInfoBlock } from 'components/artwork';
import { PageLead, Swatch, SmallLabel } from 'components/common';

// import MainImage from './main.png';
// import ExploreImage from './screen-explore.png';
// import DetailsImage from './screen-details.png';
// import DownloadsImage from './screen-download-image.png';
// import BuildAMapImage from './screen-build-a-map.png';

// Literal strings required for this to work
exports.data = {
    id: 0,
    path: `/projects/snazzymaps/`,
    category: `project`,
    type: `artwork`,
    title: `Snazzy Maps`,
    date: `2015`
};

export default class SnazzyMaps extends React.Component {
    render() {
        const data = this.props.route.page.data;

        return (
            <Artwork data={data}>
                <Helmet title={`${data.title} | ${config.siteTitle}`} />
                <PageLead>
                    Snazzy Maps is a community-driven site dedicated to customizing Google Maps.
                    Users can browse through thousands of themes created by other community members, or create their own with custom markers and infowindows.
                </PageLead>
                <ArtworkBrand logo="logo.svg" colors={["#00bc66", "#333333"]} />
                <img src='main.png' className="image-shadow" />
                <img src='screen-explore.png' className="image-shadow" />
                <img src='screen-details.png' className="image-shadow" />
                <img src='screen-download-image.png' className="image-shadow" />
                <img src='screen-build-a-map.png' className="image-shadow" />
                <ArtworkInfoBlock className="font-small">
                    <SmallLabel className="disabled">UI Built With</SmallLabel>
                    HTML, SCSS, jQuery, React
                </ArtworkInfoBlock>
            </Artwork>
        );
    }
}