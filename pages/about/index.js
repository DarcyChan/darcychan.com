import React from 'react';

import {
    PageTitle,
    PageWrapper,
    PageJumbotron,
    PageLead
} from 'components/page';
import { ExternalLink, SmallLabel } from 'components/common';

/* eslint-disable quotes */
exports.data = {
    id: 3,
    path: `/about/`,
    template: `basic`,
    category: `about`,
    showInMenu: true,
    title: `About me`,
    description: `I have been a professional UI/UX web developer and designer since 2011. I am currently a co-founder of Atmist and have worked on many projects that utilize many current technologies and practices.`
};
/* eslint-enable quotes */

export default class Projects extends React.Component {
    render() {
        return (
            <PageWrapper>
                <PageJumbotron>
                    <PageTitle>About Me</PageTitle>
                    <PageLead>
                        <p>
                            I have been a professional UI/UX web developer and
                            designer since 2011, shortly after graduating from{' '}
                            <ExternalLink
                                href="https://www.ualberta.ca/"
                                external
                            >
                                University of Alberta
                            </ExternalLink>{' '}
                            with a Bachelors of Arts&mdash;in which I majored in
                            Art and Design and minored in Mathematical Sciences.
                        </p>
                        <p>
                            I am currently a co-founder of{' '}
                            <ExternalLink href="http://atmist.com/" external>
                                Atmist
                            </ExternalLink>{' '}
                            and have worked on many projects that utilize many
                            current technologies and practices. On my days off,
                            I enjoy casual illustrating and gaming.
                        </p>
                    </PageLead>
                    <PageLead className="content-set-sm">
                        <p>
                            <SmallLabel className="disabled">
                                Contact
                            </SmallLabel>
                            <ExternalLink href="mailto:hello@darcychan.com">
                                hello@darcychan.com
                            </ExternalLink>
                        </p>
                        <p>
                            <SmallLabel className="disabled">
                                UI Tech Experience
                            </SmallLabel>
                            HTML, CSS, SCSS, PHP, JavaScript, jQuery, React
                        </p>
                        <p>
                            <SmallLabel className="disabled">
                                Design Software Experience
                            </SmallLabel>
                            Photoshop, Illustrator, InDesign, Affinity Designer
                        </p>
                    </PageLead>
                </PageJumbotron>
                <div className="page-content">
                    <p className="font-small">
                        <em>
                            This site was created with React and{' '}
                            <ExternalLink
                                href="https://www.gatsbyjs.org/"
                                external
                            >
                                Gatsby
                            </ExternalLink>. The code can be viewed on{' '}
                            <ExternalLink
                                href="https://github.com/DarcyChan/darcychan.com"
                                external
                            >
                                my Github page
                            </ExternalLink>.
                        </em>
                    </p>
                </div>
            </PageWrapper>
        );
    }
}
