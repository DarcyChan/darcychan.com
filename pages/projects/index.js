import React from 'react';

import { getArtworksFromRoute } from 'utils';
import { PageWrapper, PageTitle } from 'components/page';
import { SmallLabel } from 'components/common';
import { PreviewList } from 'components/preview';

/* eslint-disable quotes */
exports.data = {
    id: 0,
    path: `/projects/`,
    category: `project`,
    showInMenu: true,
    title: `Projects`,
    description: `A list of some recent websites and applications on which I have worked.`,
    keywords: `Projects`
};
/* eslint-enable quotes */

export default class Projects extends React.Component {
    render() {
        const route = this.props.route;
        const page = route.page.data;
        const artworks = getArtworksFromRoute(route, 'project');
        return (
            <PageWrapper className="content-set">
                <PageTitle>
                    <SmallLabel className="page-title-label">
                        Web Development
                    </SmallLabel>
                    Projects
                </PageTitle>
                <PreviewList page={page} artworks={artworks} />
            </PageWrapper>
        );
    }
}
