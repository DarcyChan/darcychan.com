/*
    Page Content Component.
    The component that displays the page content of a page, with a sticky waypoint.
*/

// External components
import React from 'react';
import Waypoint from 'react-waypoint';

// Internal components
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
                <div
                    className={combineClassNames('content-set', className)}
                    {...props}
                >
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
                    {children}
                </div>
            </Waypoint>
        );
    }
}
