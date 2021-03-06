import React from 'react';

import { Artwork, ArtworkBrand } from 'components/artwork';
import { PageContent } from 'components/page';
import { Image } from 'components/common';

/* eslint-disable quotes */
exports.data = {
    id: 1,
    path: `/projects/atmist/`,
    category: `project`,
    type: `artwork`,
    title: `Atmist`,
    description: `Branded, designed, and developed the Atmist website, where the company's services, projects, and processes are displayed.`,
    keywords: `Atmist, Atmist website, Atmist design, Atmist UI, Atmist development, WordPress, PHP, SCSS`
};
/* eslint-enable quotes */

const dimens = {
    home: {
        width: 1328,
        height: 5456
    },
    service: {
        width: 1328,
        height: 1066
    },
    portfolio: {
        width: 1328,
        height: 1170
    }
};

export default class Atmist extends React.Component {
    render() {
        const route = this.props.route;
        return (
            <Artwork
                route={route}
                description={
                    'The website for the web development company I co-founded, ' +
                    'where many of our services, projects, and processes are displayed. ' +
                    'It was an interesting challenge to create a structure for the ' +
                    'site that was flexible for our content creator while being manageable ' +
                    'through the WordPress admin panel.'
                }
                tasks="Branding, UI Design, UI Development"
                tools="WordPress, SCSS, jQuery"
                site="http://atmist.com/"
            >
                <PageContent data={route.page.data}>
                    <ArtworkBrand logo="images/logo.svg" colors={['#0084c2']} />
                    <Image
                        src="images/screen-home.png"
                        alt="Atmist - Home Page"
                        width={dimens.home.width}
                        height={dimens.home.height}
                    />
                    <div className="icon-set image-shadow">
                        <Image
                            src="images/icons-01.svg"
                            alt="Atmist Icon Set"
                            shadow={false}
                            lazyLoad={false}
                        />
                        <Image
                            src="images/icons-02.svg"
                            alt="Atmist Icon Set"
                            shadow={false}
                            lazyLoad={false}
                        />
                        <Image
                            src="images/icons-03.svg"
                            alt="Atmist Icon Set"
                            shadow={false}
                            lazyLoad={false}
                        />
                        <Image
                            src="images/icons-04.svg"
                            alt="Atmist Icon Set"
                            shadow={false}
                            lazyLoad={false}
                        />
                        <Image
                            src="images/icons-05.svg"
                            alt="Atmist Icon Set"
                            shadow={false}
                            lazyLoad={false}
                        />
                        <Image
                            src="images/icons-06.svg"
                            alt="Atmist Icon Set"
                            shadow={false}
                            lazyLoad={false}
                        />
                        <Image
                            src="images/icons-07.svg"
                            alt="Atmist Icon Set"
                            shadow={false}
                            lazyLoad={false}
                        />
                        <Image
                            src="images/icons-08.svg"
                            alt="Atmist Icon Set"
                            shadow={false}
                            lazyLoad={false}
                        />
                        <Image
                            src="images/icons-09.svg"
                            alt="Atmist Icon Set"
                            shadow={false}
                            lazyLoad={false}
                        />
                        <Image
                            src="images/icons-10.svg"
                            alt="Atmist Icon Set"
                            shadow={false}
                            lazyLoad={false}
                        />
                        <Image
                            src="images/icons-11.svg"
                            alt="Atmist Icon Set"
                            shadow={false}
                            lazyLoad={false}
                        />
                    </div>
                    <Image
                        src="images/screen-service.png"
                        alt="Atmist - Service Section"
                        width={dimens.service.width}
                        height={dimens.service.height}
                    />
                    <Image
                        src="images/screen-portfolio.png"
                        alt="Atmist - Portfolio Section"
                        width={dimens.portfolio.width}
                        height={dimens.portfolio.height}
                    />
                </PageContent>
            </Artwork>
        );
    }
}
