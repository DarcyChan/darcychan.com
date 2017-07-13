import React from 'react';
import { Motion, spring } from 'react-motion';

export default class PageTransition extends React.Component {
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
                    <section className="page-wrapper" style={{ opacity: x }}>
                        {this.props.children}
                    </section>}
            </Motion>
        );
    }
}
