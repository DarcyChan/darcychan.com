import React from 'react';

import Artwork, { ArtworkBrand, ArtworkInfoBlock } from 'components/artwork';
import { PageContent, PageLead, Swatch, SmallLabel, Image } from 'components/common';

// Literal strings required for this to work
exports.data = {
    id: 0,
    path: `/projects/snazzymaps/`,
    category: `project`,
    type: `artwork`,
    title: `Snazzy Maps`
};

export default class SnazzyMaps extends React.Component {
    render() {
        const route = this.props.route;
        const imgMobleHeight = `${720 / 720 * 100}%`
        return (
            <Artwork route={route}>
                <PageLead 
                    role="Branding, UI Design, UI Develpment"
                    tools="ASP.NET MVC, jQuery, SASS, React"
                >
                    <p>
                        Snazzy Maps is a community-driven site dedicated to customizing Google Maps.
                        Users can browse through thousands of themes created by other community members, or create their own with custom markers and infowindows.
                    </p>
                </PageLead>
                <PageContent data={route.page.data}>
                    <ArtworkBrand logo="logo.svg" colors={["#00bc66", "#333333"]} />
                    <Image src='main.png' />
                    <Image src='screen-explore.png' />
                    <div className="image-row">
                        <div className="image-col">
                            <Image src='screen-explore-mobile.png' height={imgMobleHeight} />
                        </div>
                        <div className="image-col">
                            <Image src='screen-details-mobile.png' height={imgMobleHeight} />
                        </div>
                    </div>
                    <Image src='screen-details.png' />
                    <Image src='screen-download-image.png' />
                    <Image src='screen-build-a-map.png' />
                </PageContent>
            </Artwork>
        );
    }
}