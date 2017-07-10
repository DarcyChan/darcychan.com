import React from 'react';
import Waypoint from 'react-waypoint';

import { combineClassNames } from 'utils';

export default class PageContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stickyShown: false
        };
    }

    handleEnter = () => {
        this.setState({
            stickyShown: true
        });
    };

    handleLeave = () => {
        this.setState({
            stickyShown: false
        });
    };

    render() {
        const { data, className, children, ...props } = this.props;
        return (
            <Waypoint
                onEnter={this.handleEnter}
                onLeave={this.handleLeave}
                bottomOffset="85%"
            >
                <div>
                    <div
                        className={`page-sticky ${this.state.stickyShown
                            ? 'page-sticky-on'
                            : 'page-sticky-off'}`}
                    >
                        <span className="page-sticky-label">
                            {data.category}
                        </span>
                        <span className="page-sticky-label">
                            {data.title}
                        </span>
                    </div>
                    <div
                        className={combineClassNames(
                            'page-content content-set',
                            className
                        )}
                        {...props}
                    >
                        {children}
                    </div>
                </div>
            </Waypoint>
        );
    }
}
