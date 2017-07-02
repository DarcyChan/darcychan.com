import React from 'react';

import { combineClassNames } from 'utils';
import { SmallLabel } from 'components/common';

export default class PageLead extends React.Component {
    render() {
        const { className, role, tools, children, ...props } = this.props;
        return (
            <div className={combineClassNames('page-lead', className)} {...props}>
                <div className="page-lead-desc">
                    {children}
                </div>
                {(role || tools) && 
                    <div className="page-lead-extras font-small">
                        {role && 
                            <div className="page-lead-role">
                                <SmallLabel className="disabled">Role</SmallLabel>
                                {role}
                            </div>}
                        {tools && 
                            <div className="page-lead-tools">
                                <SmallLabel className="disabled">UI Built With</SmallLabel>
                                {tools}
                            </div>}
                    </div>}
            </div>
        )
    }
}
