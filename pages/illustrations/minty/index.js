import React from 'react';

import { Artwork } from 'components/artwork';
import { PageContent } from 'components/page';
import { Image, ExternalLink } from 'components/common';

/* eslint-disable quotes */
exports.data = {
    id: 1,
    path: `/illustrations/minty/`,
    category: `illustration`,
    type: `artwork`,
    preview: `preview.jpg`,
    title: `Minty`,
    description: `A fan art illustration of an ingame character in the game Guild Wars 2.`,
    keywords: `Guild Wars 2, Guild Wars 2 fan art, fan art, illustration`
};
/* eslint-enable quotes */

const Description = (
    <p>
        A fan art illustration of an ingame character in the game{' '}
        <ExternalLink href="https://www.guildwars2.com" external>
            Guild Wars 2
        </ExternalLink>.
    </p>
);

export default class Minty extends React.Component {
    render() {
        const route = this.props.route;
        return (
            <Artwork route={route} description={Description}>
                <PageContent data={route.page.data}>
                    <Image
                        src={'images/minty.jpg'}
                        alt="Minty"
                        width={1328}
                        height={1743}
                    />
                </PageContent>
            </Artwork>
        );
    }
}
