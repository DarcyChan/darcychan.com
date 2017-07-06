import React from 'react';
import Waypoint from 'react-waypoint';

import Artwork, { ArtworkBrand, ArtworkInfoBlock } from 'components/artwork';
import { PageContent, PageLead, Swatch, SmallLabel, Image } from 'components/common';

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
        const imgHomeWidth = 1440;
        const imgHomeHeight = 779;
        
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
                <PageContent data={route.page.data}>
                    <ArtworkBrand logo="logo.svg" colors={["#0084c2"]} />
                    <div className="image-set image-shadow">
                        <Image src='screen-home-01.png' shadow={false} width={imgHomeWidth} height={imgHomeHeight} />
                        <Image src='screen-home-02.png' shadow={false} width={imgHomeWidth} height={imgHomeHeight} />
                        <Image src='screen-home-03.png' shadow={false} width={imgHomeWidth} height={imgHomeHeight} />
                        <Image src='screen-home-04.png' shadow={false} width={imgHomeWidth} height={imgHomeHeight} />
                        <Image src='screen-home-05.png' shadow={false} width={imgHomeWidth} height={imgHomeHeight} />
                        <Image src='screen-home-06.png' shadow={false} width={imgHomeWidth} height={imgHomeHeight} />
                        <Image src='screen-home-07.png' shadow={false} width={imgHomeWidth} height={imgHomeHeight} />
                    </div>
                    <div className="image-set icon-set image-shadow">
                        <Image src="icons-01.svg" shadow={false} lazyLoad={false} />
                        <Image src="icons-02.svg" shadow={false} lazyLoad={false} />
                        <Image src="icons-03.svg" shadow={false} lazyLoad={false} />
                        <Image src="icons-04.svg" shadow={false} lazyLoad={false} />
                        <Image src="icons-05.svg" shadow={false} lazyLoad={false} />
                        <Image src="icons-06.svg" shadow={false} lazyLoad={false} />
                        <Image src="icons-07.svg" shadow={false} lazyLoad={false} />
                        <Image src="icons-08.svg" shadow={false} lazyLoad={false} />
                        <Image src="icons-09.svg" shadow={false} lazyLoad={false} />
                        <Image src="icons-10.svg" shadow={false} lazyLoad={false} />
                        <Image src="icons-11.svg" shadow={false} lazyLoad={false} />
                    </div>
                    <Image src="screen-service.png" width={1440} height={1062} />
                    <Image src="screen-portfolio.png" width={1440} height={1140} />
                </PageContent>
            </Artwork>
        );
    }
}