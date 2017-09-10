import React from 'react';

import { Artwork, ArtworkBrand } from 'components/artwork';
import { PageContent } from 'components/page';
import { Image } from 'components/common';

/* eslint-disable quotes */
exports.data = {
    id: 2,
    path: `/projects/neuromembrane/`,
    category: `project`,
    type: `artwork`,
    title: `Neuromembrane`,
    description: `Designed and developed the UI for Neuromembrane, a web-based simulator and teaching tool that demonstrates neuroscience concepts.`,
    keywords: `Neuromenbrane, Neuromembrane design, Neuromembrane UI, CSS`
};
/* eslint-enable quotes */

const dimens = {
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
                    'A web-based simulator and teaching tool that demonstrates neuroscience concepts. ' +
                    'Users can choose a simulation type, adjust values and settings of the simulation, ' +
                    'and play the resulting animation. Designing a responsive UI, creating the assets ' +
                    'required for the animations, and optimizing performance to support a wide variety of ' +
                    'devices while under limited time and budget was a fascinating challenge.'
                }
                tasks="UI Design, UI Develpment"
                tools="jQuery, CSS"
                site="https://neuromembrane.ualberta.ca/account/login"
            >
                <PageContent data={route.page.data}>
                    <ArtworkBrand colors={['#1f1f1f', '#fd6b3d']} />
                    <Image
                        src="images/screen-login.png"
                        alt="Neuromembrane - Login Page"
                    />
                    <Image
                        src="images/screen-actionpotential-setup.png"
                        alt="Neuromembrane - Action Potential Simulation"
                    />
                    <Image
                        src="images/screen-epsp-sim.png"
                        alt="Neuromembrane - EPSP Simulation"
                    />
                    <Image
                        src="images/screen-integration-setup.png"
                        alt="Neuromembrane - Integration Simulation"
                    />
                    <div className="image-row">
                        <div className="image-col">
                            <Image
                                src="images/screen-setup-mobile.png"
                                alt="Neuromembrane - Simulation Setup on Mobile"
                                width={dimens.mobile.width}
                                height={dimens.mobile.height}
                            />
                        </div>
                        <div className="image-col">
                            <Image
                                src="images/screen-sim-mobile.png"
                                alt="Neuromembrane - Animation on Mobile"
                                width={dimens.mobile.width}
                                height={dimens.mobile.height}
                            />
                        </div>
                        <div className="image-col">
                            <Image
                                src="images/screen-graph-mobile.png"
                                alt="Neuromembrane - Graphs on Mobile"
                                width={dimens.mobile.width}
                                height={dimens.mobile.height}
                            />
                        </div>
                    </div>
                </PageContent>
            </Artwork>
        );
    }
}
