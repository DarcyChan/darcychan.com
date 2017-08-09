import React from 'react';

import { Artwork } from 'components/artwork';
import { PageContent } from 'components/page';
import { Image } from 'components/common';

/* eslint-disable quotes */
exports.data = {
    id: 4,
    path: `/projects/snazzyinfowindow/`,
    category: `project`,
    type: `artwork`,
    title: `Snazzy Info Window`,
    description: `Developed the Snazzy Info Window plugin, an open-source plugin to create and style info windows alongside the Google Maps JavaScript API.`,
    keywords: `Snazzy Info Window, Snazzy Info Window development, JavaScript, CSS, SCSS`
};
/* eslint-enable quotes */

export default class SnazzyMaps extends React.Component {
    render() {
        const route = this.props.route;
        return (
            <Artwork
                route={route}
                description={
                    'Snazzy Info Window is an open-source plugin to create ' +
                    'and style info windows alongside the Google Maps ' +
                    'JavaScript API. The plugin supports responsive sizing, ' +
                    'custom styling via JavaScript, CSS, and/or Sass, and ' +
                    'dynamic HTML content. It was a rewarding challenge to ' +
                    'create and share a plugin that offers flexibility and ' +
                    'customizability for other developers and designers.'
                }
                tasks="UI Develpment"
                tools="JavaScript, SCSS"
                site="https://github.com/atmist/snazzy-info-window"
            >
                <PageContent data={route.page.data}>
                    <Image
                        src="images/screen-scss.png"
                        alt="Snazzy Info Window styled with SCSS"
                    />
                    <Image
                        src="images/screen-js.png"
                        alt="Snazzy Info Window styled with JavaScript"
                    />
                    <Image
                        src="images/screen-complex.png"
                        alt="Complex styling with Snazzy Info Window"
                    />
                </PageContent>
            </Artwork>
        );
    }
}
