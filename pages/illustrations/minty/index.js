import React from 'react';

import Artwork from 'components/artwork';
import { PageContent, PageLead, Image, Link } from 'components/common';

// Literal strings required for this to work
exports.data = {
    id: 0,
    path: `/illustrations/minty/`,
    category: `illustration`,
    type: `artwork`,
    title: `Minty`
};

export default class Minty extends React.Component {
    render() {
        const route = this.props.route;
        return (
            <Artwork route={route}>
                <PageLead>
                    <p>
                        A fan art illustration of an ingame character in the game
                        {' '}
                        <Link href="https://www.guildwars2.com" external>Guild Wars 2</Link>.
                    </p>
                </PageLead>
                <PageContent data={route.page.data}>
                    <Image src={'minty.png'} height={`${1417 / 1080 * 100}%`} />
                </PageContent>
            </Artwork>
        );
    }
}