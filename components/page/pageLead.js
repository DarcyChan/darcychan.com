/*
    Page Lead Component.
    The lead section of the page, with a description, role, and link of the project if it exists.
*/

// External components
import React from 'react';

// Internal components
import { combineClassNames } from 'utils';
import { SmallLabel, Link } from 'components/common';

export default class PageLead extends React.Component {
    render() {
        const {
            className,
            tasks,
            tools,
            site,
            children,
            ...props
        } = this.props;
        return (
            <div
                className={combineClassNames('page-lead', className)}
                {...props}
            >
                <div className="page-lead-desc">
                    {children}
                </div>
                {(tasks || tools) &&
                    <div className="page-lead-extras font-small">
                        {tasks &&
                            <div className="page-lead-role">
                                <SmallLabel className="disabled">
                                    Role
                                </SmallLabel>
                                {tasks}
                            </div>}
                        {tools &&
                            <div className="page-lead-tools">
                                <SmallLabel className="disabled">
                                    UI Built With
                                </SmallLabel>
                                {tools}
                            </div>}
                        {site &&
                            <div className="page-lead-site">
                                <SmallLabel className="disabled">
                                    Site
                                </SmallLabel>
                                <Link href={site} external>
                                    View Site
                                </Link>
                            </div>}
                    </div>}
            </div>
        );
    }
}
