import React from 'react';

import { Artwork, ArtworkBrand } from 'components/artwork';
import { PageContent, PageLead } from 'components/page';
import { Image, ImageSet } from 'components/common';

/* eslint-disable quotes */
exports.data = {
    id: 3,
    path: `/projects/tripitty/`,
    category: `project`,
    type: `artwork`,
    title: `Tripitty`
};
/* eslint-enable quotes */

const dimens = {
    stats: {
        width: 1328,
        height: 1184
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
            <Artwork route={route}>
                <PageLead
                    tasks="Branding, UI Design, UI Develpment"
                    tools="jQuery, SCSS"
                    site="https://tripitty.com/"
                >
                    <p>
                        Tripitty is a site to create a travel profile and share
                        travel stats. Users can enter the stops on their trips
                        and see visuals of interesting travel stats, such as
                        distance travelled, countries visited, and longest
                        trips. Designing and implementing the UI became an
                        experiment with fixed overlapping panels, where many of
                        them interacted with each other.
                    </p>
                </PageLead>
                <PageContent data={route.page.data}>
                    <ArtworkBrand
                        logo="images/logo.svg"
                        colors={['#22a7f0', '#464646']}
                    />
                    <Image
                        src="images/screen-landing.png"
                        alt="Tripitty - Landing Page"
                    />
                    <Image
                        src="images/screen-profile.png"
                        alt="Tripitty - Profile Page"
                    />
                    <Image
                        src="images/screen-trip.png"
                        alt="Tripitty - Trip Page"
                    />
                    <div className="image-row">
                        <div className="image-col">
                            <Image
                                src="images/screen-trip-mobile-01.png"
                                alt="Tripitty - Mobile Trip Page"
                                width={dimens.mobile.width}
                                height={dimens.mobile.height}
                            />
                        </div>
                        <div className="image-col">
                            <Image
                                src="images/screen-trip-mobile-02.png"
                                alt="Tripitty - Mobile Trip Page"
                                width={dimens.mobile.width}
                                height={dimens.mobile.height}
                            />
                        </div>
                    </div>
                    <div className="image-row">
                        <div className="image-col">
                            <Image
                                src="images/screen-trip-mobile-03.png"
                                alt="Tripitty - Mobile Trip Page"
                                width={dimens.mobile.width}
                                height={dimens.mobile.height}
                            />
                        </div>
                        <div className="image-col">
                            <Image
                                src="images/screen-trip-mobile-04.png"
                                alt="Tripitty - Mobile Trip Page"
                                width={dimens.mobile.width}
                                height={dimens.mobile.height}
                            />
                        </div>
                    </div>
                    <Image
                        src="images/screen-trip-stop.png"
                        alt="Tripitty - Trip Page"
                    />
                    <ImageSet
                        images={[
                            'images/screen-stats-01.png',
                            'images/screen-stats-02.png',
                            'images/screen-stats-03.png',
                            'images/screen-stats-04.png'
                        ]}
                        alt="Tripitty - Stats Page"
                        width={dimens.stats.width}
                        height={dimens.stats.height}
                    />
                </PageContent>
            </Artwork>
        );
    }
}
