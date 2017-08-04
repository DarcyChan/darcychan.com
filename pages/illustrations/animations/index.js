import React from 'react';

import { Artwork } from 'components/artwork';
import { PageContent, PageLead } from 'components/page';
import Switch from './switch';
import RecordPlayer from './record';

/* eslint-disable quotes */
exports.data = {
    id: 0,
    path: `/illustrations/animations/`,
    category: `illustration`,
    type: `artwork`,
    title: `CSS Animations`,
    preview: `preview.png`
};
/* eslint-enable quotes */

export default class Animations extends React.Component {
    render() {
        const route = this.props.route;
        return (
            <Artwork route={route}>
                <PageLead>
                    <p>Some animating illustrations using CSS. Made for fun.</p>
                </PageLead>
                <PageContent data={route.page.data}>
                    <Switch />
                    <RecordPlayer />
                </PageContent>
            </Artwork>
        );
    }
}
