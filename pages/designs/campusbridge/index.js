// External components
import React from 'react';

// Internal components
import { Artwork } from 'components/artwork';
import { PageContent } from 'components/page';
import { Image, SmallLabel } from 'components/common';

/* eslint-disable quotes */
exports.data = {
    id: 0,
    path: `/designs/campusbridge/`,
    category: `design`,
    type: `artwork`,
    title: `CampusBridge`,
    description: `A mockup created for a client of a WordPress site that highlights features of a job posting site as well as the branding of the product.`
};
/* eslint-enable quotes */

// Image dimensions for lazy loading
const dimens = {
    home: {
        width: 1328,
        height: 5620
    },
    mainBrand: {
        width: 500,
        height: 500
    },
    sampleBrand: {
        width: 250,
        height: 250
    }
};

export default class CreditCardCheckout extends React.Component {
    render() {
        const route = this.props.route;
        return (
            <Artwork
                route={route}
                description={
                    'A mockup created for a client of a WordPress site that ' +
                    'highlights features of a job posting site as well as the ' +
                    'branding of the product.'
                }
            >
                <PageContent data={route.page.data}>
                    <Image
                        src="images/screen-home.png"
                        alt="CampusBridge - Home Page"
                        width={dimens.home.width}
                        height={dimens.home.height}
                    />
                    <div className="image-shadow">
                        <div className="image-header">
                            <SmallLabel className="text-center disabled">
                                Final Logo
                            </SmallLabel>
                        </div>
                        <div className="image-row image-row-set">
                            <div
                                className="image-col"
                                style={{
                                    maxWidth: dimens.mainBrand.width
                                }}
                            >
                                <Image
                                    src="images/logo-main.png"
                                    alt="CampusBridge - Logo"
                                    width={dimens.mainBrand.width}
                                    height={dimens.mainBrand.height}
                                    shadow={false}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="image-shadow">
                        <div className="image-header">
                            <SmallLabel className="text-center disabled">
                                Other Logos
                            </SmallLabel>
                        </div>
                        <div className="image-row image-row-set">
                            <div className="image-col">
                                <Image
                                    src="images/logo-sample-01.png"
                                    alt="CampusBridge - Working Logo Concept"
                                    width={dimens.sampleBrand.width}
                                    height={dimens.sampleBrand.height}
                                    shadow={false}
                                />
                            </div>
                            <div className="image-col">
                                <Image
                                    src="images/logo-sample-02.png"
                                    alt="CampusBridge - Working Logo Concept"
                                    width={dimens.sampleBrand.width}
                                    height={dimens.sampleBrand.height}
                                    shadow={false}
                                />
                            </div>
                            <div className="image-col">
                                <Image
                                    src="images/logo-sample-03.png"
                                    alt="CampusBridge - Working Logo Concept"
                                    width={dimens.sampleBrand.width}
                                    height={dimens.sampleBrand.height}
                                    shadow={false}
                                />
                            </div>
                        </div>
                        <div className="image-row image-row-set">
                            <div className="image-col">
                                <Image
                                    src="images/logo-sample-04.png"
                                    alt="CampusBridge - Working Logo Concept"
                                    width={dimens.sampleBrand.width}
                                    height={dimens.sampleBrand.height}
                                    shadow={false}
                                />
                            </div>
                            <div className="image-col">
                                <Image
                                    src="images/logo-sample-05.png"
                                    alt="CampusBridge - Working Logo Concept"
                                    width={dimens.sampleBrand.width}
                                    height={dimens.sampleBrand.height}
                                    shadow={false}
                                />
                            </div>
                            <div className="image-col">
                                <Image
                                    src="images/logo-sample-06.png"
                                    alt="CampusBridge - Working Logo Concept"
                                    width={dimens.sampleBrand.width}
                                    height={dimens.sampleBrand.height}
                                    shadow={false}
                                />
                            </div>
                        </div>
                    </div>
                </PageContent>
            </Artwork>
        );
    }
}
