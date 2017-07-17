import React from 'react';

import { PageTitle, PageWrapper, PageLead } from 'components/page';
import { Link, SmallLabel } from 'components/common';

/* eslint-disable quotes */
exports.data = {
    id: 3,
    path: `/about/`,
    template: `basic`,
    category: `about`,
    showInMenu: true,
    title: `About me`
};
/* eslint-enable quotes */

export default class Projects extends React.Component {
    render() {
        return (
            <PageWrapper className="page-content content-set">
                <PageTitle>About Me</PageTitle>
                <PageLead>
                    <p>
                        I have been a professional UI/UX web developer and
                        designer since 2011, shortly after graduating from{' '}
                        <Link href="https://www.ualberta.ca/" external>
                            University of Alberta
                        </Link>{' '}
                        with a Bachelors of Arts&mdash;in which I majored in Art
                        and Design and minored in Mathematical Sciences.
                    </p>
                    <p>
                        I am currently a co-founder of{' '}
                        <Link href="http://atmist.com/" external>
                            Atmist
                        </Link>{' '}
                        and have worked on many projects that utilize many
                        current technologies and practices. On my days off, I
                        enjoy casual illustrating and gaming.
                    </p>
                </PageLead>
                <div className="content-set-sm">
                    <p>
                        <SmallLabel className="disabled">Contact</SmallLabel>
                        <Link href="mailto:hello@darcychan.com">
                            hello@darcychan.com
                        </Link>
                    </p>
                    <p>
                        <SmallLabel className="disabled">
                            UI Tech Experience
                        </SmallLabel>
                        HTML, CSS, SCSS, JavaScript, jQuery, React
                    </p>
                    <p>
                        <SmallLabel className="disabled">
                            Design Software Experience
                        </SmallLabel>
                        Photoshop, Illustrator, InDesign, After Effects,
                        Affinity Designer
                    </p>
                </div>
                <p className="font-small">
                    <em>
                        This site was created with React and{' '}
                        <Link href="https://www.gatsbyjs.org/" external>
                            Gatsby
                        </Link>. The code can be viewed on{' '}
                        <Link
                            href="https://github.com/DarcyChan/darcychan.com"
                            external
                        >
                            my Github page
                        </Link>.
                    </em>
                </p>
            </PageWrapper>
        );
    }
}
