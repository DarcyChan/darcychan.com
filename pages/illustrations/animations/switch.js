import React from 'react';
import Waypoint from 'react-waypoint';

import { Image, SmallLabel } from 'components/common';
import './scss/switch.scss';

export default class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false
        };
    }

    handleEnter = () => {
        this.setState({
            animate: true
        });
    };

    handleLeave = () => {
        this.setState({
            animate: false
        });
    };

    render() {
        return (
            <Waypoint onEnter={this.handleEnter} onLeave={this.handleLeave}>
                <div className="image-shadow">
                    <div className="image-header">
                        <SmallLabel className="text-center disabled">
                            Nintendo Switch
                        </SmallLabel>
                    </div>
                    <div className="content-padded-lg">
                        <div
                            className={`switch ${this.state.animate
                                ? 'animate-on'
                                : ''}`}
                        >
                            <Image
                                src="images/switch-joycons.svg"
                                alt="Nintendo Switch Joycons"
                                className="switch-joycons"
                                shadow={false}
                                lazyLoad={false}
                            />
                            <Image
                                src="images/switch-console.svg"
                                alt="Nintendo Switch Console"
                                className="switch-console"
                                shadow={false}
                                lazyLoad={false}
                            />
                        </div>
                    </div>
                </div>
            </Waypoint>
        );
    }
}
