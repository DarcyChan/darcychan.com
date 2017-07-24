import React from 'react';

import { Artwork } from 'components/artwork';
import { PageContent } from 'components/page';
import { Image } from 'components/common';

/* eslint-disable quotes */
exports.data = {
    id: 1,
    path: `/illustrations/jewel/`,
    category: `illustration`,
    type: `artwork`,
    title: `Jewel`,
    preview: `preview.jpg`
};
/* eslint-enable quotes */

export default class Jewel extends React.Component {
    render() {
        const route = this.props.route;
        return (
            <Artwork route={route}>
                <PageContent data={route.page.data}>
                    <Image
                        src={'images/jewel.jpg'}
                        alt="Jewel"
                        width={900}
                        height={1182}
                    />
                </PageContent>
            </Artwork>
        );
    }
}
