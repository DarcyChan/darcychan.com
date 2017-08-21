/*
    Page Wrapper Component.
    The wrapper of the page.
*/

// External components
import React from 'react';
import { Motion, spring } from 'react-motion';

// Internal components
import { combineClassNames } from 'utils';

export default class PageWrapper extends React.Component {
    componentWillMount() {
        this.setState({ mounted: false });
    }

    componentDidMount() {
        const c = this;
        setTimeout(() => {
            c.setState({ mounted: true });
        }, 100);
    }

    render() {
        const { className, children, ...props } = this.props;
        return (
            <Motion
                style={{
                    x: spring(this.state.mounted ? 1 : 0, {
                        stiffness: 300,
                        damping: 30
                    })
                }}
            >
                {({ x }) =>
                    <div
                        className={combineClassNames('page-wrapper', className)}
                        style={{ opacity: x }}
                        {...props}
                    >
                        <div className="page-wrapper-flair-top" />
                        <article className="page">
                            {children}
                        </article>
                    </div>}
            </Motion>
        );
    }
}
