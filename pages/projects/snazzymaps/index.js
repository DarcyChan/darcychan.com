import React from 'react';

import Artwork, { ArtworkBrand, ArtworkInfoBlock } from 'components/artwork';
import { PageLead, Swatch, SmallLabel } from 'components/common';

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
                <ArtworkBrand logo="logo.svg" colors={["#00bc66", "#333333"]} />
                <img src='main.png' className="image-shadow" />
                <img src='screen-explore.png' className="image-shadow" />
                <div className="image-row">
                    <div className="image-col">
                        <img src='screen-explore-mobile.png' className="image-shadow" />
                    </div>
                    <div className="image-col">
                        <img src='screen-details-mobile.png' className="image-shadow" />
                    </div>
                </div>
                <img src='screen-details.png' className="image-shadow" />
                <img src='screen-download-image.png' className="image-shadow" />
                <img src='screen-build-a-map.png' className="image-shadow" />
            </Artwork>
        );
    }
}