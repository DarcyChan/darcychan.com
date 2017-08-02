import React from 'react';

import { Artwork } from 'components/artwork';
import { PageContent, PageLead } from 'components/page';
import { Image, SmallLabel } from 'components/common';
import 'scss/switch.scss';

/* eslint-disable quotes */
exports.data = {
    id: 2,
    path: `/illustrations/animations/`,
    category: `illustration`,
    type: `artwork`,
    title: `CSS Animations`,
    preview: `preview.jpg`
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
                    <div className="image-shadow">
                        <div className="image-header">
                            <SmallLabel className="text-center disabled">
                                Nintendo Switch
                            </SmallLabel>
                        </div>
                        <div className="switch-wrapper">
                            <div className="switch">
                                <Image
                                    src="images/switch-joycons.svg"
                                    alt="Nintendo Switch Joycons"
                                    className="switch-joycons"
                                    shadow={false}
                                    lazyLoad={false}
                                />
                                <Image
                                    src="images/switch-console.svg"
                                    alt="Nintendo Switch Console"
                                    className="switch-console"
                                    shadow={false}
                                    lazyLoad={false}
                                />
                            </div>
                        </div>
                    </div>
                </PageContent>
            </Artwork>
        );
    }
}
