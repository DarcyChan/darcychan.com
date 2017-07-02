import React from 'react';

import Artwork from 'components/artwork';
import { PageLead, Image, Link } from 'components/common';

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
                        A fanart illustration of a friend's character in the game
                        {' '}
                        <Link href="https://www.guildwars2.com" external>Guild Wars 2</Link>.
                    </p>
                </PageLead>
                <Image src={'minty.png'} className="image-shadow" />
            </Artwork>
        );
    }
}