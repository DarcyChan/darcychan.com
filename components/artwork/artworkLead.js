/*
    Artwork Brand Component.
    The component that displays the artwork's logo and colour swatches.
*/

// External components
import React from 'react';

// Internal components
import { combineClassNames } from 'utils';
import { PageLead } from 'components/page';
import { SmallLabel, ExternalLink } from 'components/common';

export default class ArtworkLead extends React.Component {
    render() {
        const {
            tasks,
            tools,
            site,
            className,
            children,
            ...props
        } = this.props;
        return (
            <PageLead
                className={combineClassNames('page-lead-extras', className)}
                {...props}
            >
                {tasks &&
                    <div className="page-lead-role font-small">
                        <SmallLabel className="disabled">Role</SmallLabel>
                        {tasks}
                    </div>}
                {tools &&
                    <div className="page-lead-tools font-small">
                        <SmallLabel className="disabled">
                            UI Built With
                        </SmallLabel>
                        {tools}
                    </div>}
                {site &&
                    <div className="page-lead-site font-small">
                        <SmallLabel className="disabled">Site</SmallLabel>
                        <ExternalLink href={site} external>
                            View Site
                        </ExternalLink>
                    </div>}
                {children}
            </PageLead>
        );
    }
}
