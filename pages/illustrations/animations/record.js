// TODO: Figure out a way to bypass the way the current webpack is
//       importing SVGs so we can have inline SVG code that can
//       be animated.

import React from 'react';
import Waypoint from 'react-waypoint';

import { Image, SmallLabel } from 'components/common';
import './scss/record.scss';

export default class RecordPlayer extends React.Component {
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
                            Record Player
                        </SmallLabel>
                    </div>
                    <div className="content-padded">
                        <div
                            className={`record-player ${this.state.animate
                                ? 'animate-on'
                                : ''}`}
                        >
                            <Image
                                src="images/record-player-recordshadow.svg"
                                alt="Record Shadow"
                                className="record-player-recordshadow"
                                shadow={false}
                                lazyLoad={false}
                            />
                            <Image
                                src="images/record-player-record.svg"
                                alt="Record"
                                className="record-player-record"
                                shadow={false}
                                lazyLoad={false}
                            />
                            <Image
                                src="images/record-player-recordhighlight.svg"
                                alt="Record Highlight"
                                className="record-player-recordhighlight"
                                shadow={false}
                                lazyLoad={false}
                            />
                            <Image
                                src="images/record-player-armshadow.svg"
                                alt="Arm Shadow"
                                className="record-player-armshadow"
                                shadow={false}
                                lazyLoad={false}
                            />
                            <Image
                                src="images/record-player-arm.svg"
                                alt="Arm"
                                className="record-player-arm"
                                shadow={false}
                                lazyLoad={false}
                            />
                            <Image
                                src="images/record-player-armpivot.svg"
                                alt="Arm Pivot"
                                className="record-player-armpivot"
                                shadow={false}
                                lazyLoad={false}
                            />
                            <Image
                                src="images/record-player-base.svg"
                                alt="Record Player"
                                className="record-player-base"
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
