import React from 'react';

import { getArtworksFromRoute } from 'utils';
import { PageWrapper, PageJumbotron } from 'components/page';
import { PreviewList } from 'components/preview';

/* eslint-disable quotes */
exports.data = {
    id: 0,
    path: `/projects/`,
    category: `project`,
    showInMenu: true,
    title: `Projects`,
    description: `A list of some recent websites and applications I have worked on.`,
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
                <PageJumbotron
                    title="Projects"
                    label="Web Development"
                    description="A list of some recent websites, applications, and plugins I have worked on."
                />
                <PreviewList page={page} artworks={artworks} />
            </PageWrapper>
        );
    }
}
