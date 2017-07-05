import React from 'react';

import Artwork, { ArtworkBrand, ArtworkInfoBlock } from 'components/artwork';
import { PageContent, PageLead, Swatch, SmallLabel, Image } from 'components/common';

// Literal strings required for this to work
exports.data = {
    id: 2,
    path: `/projects/neuromembrane/`,
    category: `project`,
    type: `artwork`,
    title: `Neuromembrane`
};

export default class SnazzyMaps extends React.Component {
    render() {
        const route = this.props.route;
        const imgMobileHeight = `${1420 / 800 * 100}%`;
        return (
            <Artwork route={route}>
                <PageLead 
                    role="UI Design, UI Develpment"
                    tools="jQuery, CSS"
                >
                    <p>
                        TODO
                    </p>
                </PageLead>
                <PageContent data={route.page.data}>
                    <ArtworkBrand colors={["#1f1f1f", "#fd6b3d"]} />
                    <Image src='screen-login.png' />
                    <Image src='screen-actionpotential-setup.png' />
                    <Image src='screen-epsp-sim.png' />
                    <Image src='screen-integration-setup.png' />
                    <div className="image-row">
                        <div className="image-col">
                            <Image src='screen-setup-mobile.png' height={imgMobileHeight} />
                        </div>
                        <div className="image-col">
                            <Image src='screen-sim-mobile.png' height={imgMobileHeight} />
                        </div>
                        <div className="image-col">
                            <Image src='screen-graph-mobile.png' height={imgMobileHeight} />
                        </div>
                    </div>
                </PageContent>
            </Artwork>
        );
    }
}