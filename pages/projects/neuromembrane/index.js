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

        const imgDesktopWidth = 2656;
        const imgDesktopHeight = 1642;
        const imgMobileWidth = 800;
        const imgMobileHeight = 1420;

        return (
            <Artwork route={route}>
                <PageLead 
                    role="UI Design, UI Develpment"
                    tools="jQuery, CSS"
                >
                    <p>
                        A web-based simulator and teaching tool that demonstrates neuroscience concepts.
                    </p>
                </PageLead>
                <PageContent data={route.page.data}>
                    <ArtworkBrand colors={["#1f1f1f", "#fd6b3d"]} />
                    <Image src='screen-login.png' width={imgDesktopWidth} height={imgDesktopHeight} responsive />
                    <Image src='screen-actionpotential-setup.png' width={imgDesktopWidth} height={imgDesktopHeight} responsive />
                    <Image src='screen-epsp-sim.png' width={imgDesktopWidth} height={imgDesktopHeight} responsive />
                    <Image src='screen-integration-setup.png' width={imgDesktopWidth} height={imgDesktopHeight} responsive />
                    <div className="image-row">
                        <div className="image-col">
                            <Image src='screen-setup-mobile.png' width={imgMobileWidth} height={imgMobileHeight} />
                        </div>
                        <div className="image-col">
                            <Image src='screen-sim-mobile.png' width={imgMobileWidth} height={imgMobileHeight} />
                        </div>
                        <div className="image-col">
                            <Image src='screen-graph-mobile.png' width={imgMobileWidth} height={imgMobileHeight} />
                        </div>
                    </div>
                </PageContent>
            </Artwork>
        );
    }
}