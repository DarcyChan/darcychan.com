import React from 'react';

import { Artwork } from 'components/artwork';
import { PageContent, PageLead } from 'components/page';
import { Image, Link } from 'components/common';

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

export default class Minty extends React.Component {
    render() {
        const route = this.props.route;
        return (
            <Artwork route={route}>
                <PageLead>
                    <p>
                        A fan art illustration of an ingame character in the
                        game{' '}
                        <Link href="https://www.guildwars2.com" external>
                            Guild Wars 2
                        </Link>.
                    </p>
                </PageLead>
                <PageContent data={route.page.data}>
                    <Image
                        src={'images/minty.jpg'}
                        alt="Minty"
                        width={900}
                        height={1182}
                    />
                </PageContent>
            </Artwork>
        );
    }
}
