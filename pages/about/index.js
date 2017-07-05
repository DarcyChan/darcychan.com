import React from 'react';

import { PageTitle, PageWrapper, PageLead } from 'components/common';

// Literal strings required for this to work
exports.data = {
    id: 3,
    path: `/about/`,
    template: `basic`,
    category: `about`,
    showInMenu: true,
    title: `About me`
};

export default class Projects extends React.Component {
    render() {
        return (
            <PageWrapper className="content-set">
                <PageTitle>
                    About Me
                </PageTitle>
                <PageLead>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Proin ut interdum augue. Sed facilisis sapien a eros volutpat porta. 
                        Integer semper facilisis mattis. Nulla a elementum urna.
                    </p>
                </PageLead>
            </PageWrapper>
        );
    }
}