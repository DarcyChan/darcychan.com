import React from 'react';

import Artwork, { ArtworkBrand, ArtworkInfoBlock } from 'components/artwork';
import { PageLead, Swatch, SmallLabel, Image } from 'components/common';

// Literal strings required for this to work
exports.data = {
    id: 1,
    path: `/projects/atmist/`,
    category: `project`,
    type: `artwork`,
    title: `Atmist`
};

export default class Atmist extends React.Component {
    render() {
        const route = this.props.route;
        return (
            <Artwork route={route}>
                <PageLead 
                    role="Branding, UI Design, UI Development"
                    tools="WordPress, SASS, jQuery"
                >
                    <p>
                        The website for the web development company I co-founded, where many of our services, projects, and processes are displayed.
                    </p>
                </PageLead>
                <ArtworkBrand logo="logo.svg" colors={["#0084c2"]} />
                <div className="image-set image-shadow">
                    <Image src='screen-home-01.png' />
                    <Image src='screen-home-02.png' />
                    <Image src='screen-home-03.png' />
                    <Image src='screen-home-04.png' />
                    <Image src='screen-home-05.png' />
                    <Image src='screen-home-06.png' />
                    <Image src='screen-home-07.png' />
                </div>
                <div className="image-set icon-set image-shadow">
                    <Image src="icons-01.svg" />
                    <Image src="icons-02.svg" />
                    <Image src="icons-03.svg" />
                    <Image src="icons-04.svg" />
                    <Image src="icons-05.svg" />
                    <Image src="icons-06.svg" />
                    <Image src="icons-07.svg" />
                    <Image src="icons-08.svg" />
                    <Image src="icons-09.svg" />
                    <Image src="icons-10.svg" />
                    <Image src="icons-11.svg" />
                </div>
                <Image src="screen-service.png" className="image-shadow" />
                <Image src="screen-portfolio.png" className="image-shadow" />
            </Artwork>
        );
    }
}