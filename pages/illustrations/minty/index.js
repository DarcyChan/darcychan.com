import React from 'react';

import { Artwork } from 'components/artwork';
import { PageContent, PageLead, Image, Link } from 'components/common';

/* eslint-disable quotes */
exports.data = {
    id: 0,
    path: `/illustrations/minty/`,
    category: `illustration`,
    type: `artwork`,
    title: `Minty`
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
                    <Image src={'minty.png'} width={1080} height={1417} />
                </PageContent>
            </Artwork>
        );
    }
}
