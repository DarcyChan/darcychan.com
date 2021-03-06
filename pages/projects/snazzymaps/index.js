import React from 'react';

import { Artwork, ArtworkBrand } from 'components/artwork';
import { PageContent } from 'components/page';
import { Image } from 'components/common';

/* eslint-disable quotes */
exports.data = {
    id: 0,
    path: `/projects/snazzymaps/`,
    category: `project`,
    type: `artwork`,
    title: `Snazzy Maps`,
    description: `Branded, designed, and developed the UI for Snazzy Maps, a community-driven site dedicated to customizing Google Maps.`,
    keywords: `Snazzy Maps, Snazzy Maps design, Snazzy Maps UI, ASP.NET MVC, jQuery, SCSS, React`
};
/* eslint-enable quotes */

// Image dimensions for lazy loading
const dimens = {
    home: {
        width: 1328,
        height: 2670
    },
    press: {
        width: 1328,
        height: 4638
    },
    mobile: {
        width: 400,
        height: 710
    }
};

export default class SnazzyMaps extends React.Component {
    render() {
        const route = this.props.route;
        return (
            <Artwork
                route={route}
                description={
                    'Snazzy Maps is a community-driven site dedicated to customizing Google Maps. ' +
                    'Users can browse through thousands of themes created by other community members,' +
                    'or create their own with custom markers and infowindows. ' +
                    'Creating and evolving a UI that is used by thousands of people daily has been an ' +
                    'exciting learning process and adding new features will be just as rewarding.'
                }
                tasks="Branding, UI Design, UI Develpment"
                tools="ASP.NET MVC, jQuery, SCSS, React"
                site="https://snazzymaps.com/"
            >
                <PageContent data={route.page.data}>
                    <ArtworkBrand
                        logo="images/logo.svg"
                        colors={['#00bc66', '#333333']}
                    />
                    <Image
                        src="images/screen-home.png"
                        alt="Snazzy Maps - Home Page"
                        width={dimens.home.width}
                        height={dimens.home.height}
                    />
                    <Image
                        src="images/screen-details.png"
                        alt="Snazzy Maps - Details Page"
                    />
                    <Image
                        src="images/screen-image-download.png"
                        alt="Snazzy Maps - Download Image Page"
                    />
                    <div className="image-row">
                        <div className="image-col">
                            <Image
                                src="images/screen-explore-mobile.png"
                                alt="Snazzy Maps - Mobile Explore Page"
                                width={dimens.mobile.width}
                                height={dimens.mobile.height}
                            />
                        </div>
                        <div className="image-col">
                            <Image
                                src="images/screen-detail-mobile.png"
                                alt="Snazzy Maps - Mobile Details Page"
                                width={dimens.mobile.width}
                                height={dimens.mobile.height}
                            />
                        </div>
                        <div className="image-col">
                            <Image
                                src="images/screen-image-download-mobile.png"
                                alt="Snazzy Maps - Mobile Image Download"
                                width={dimens.mobile.width}
                                height={dimens.mobile.height}
                            />
                        </div>
                    </div>
                    <Image
                        src="images/screen-map.png"
                        alt="Snazzy Maps - Build a Map Page"
                    />
                    <Image
                        src="images/screen-map-style.png"
                        alt="Snazzy Maps - Build a Map - Choose a Style"
                    />
                    <Image
                        src="images/screen-map-marker.png"
                        alt="Snazzy Maps - Build a Map - Add a Marker"
                    />
                    <Image
                        src="images/screen-press.png"
                        alt="Snazzy Maps - Home Page"
                        width={dimens.press.width}
                        height={dimens.press.height}
                    />
                </PageContent>
            </Artwork>
        );
    }
}
