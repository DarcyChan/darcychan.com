import React from 'react';
import { Motion, spring } from 'react-motion';

import { Image } from 'components/common';

export default class Overlay extends React.Component {
    render() {
        const {
            isRight,
            isFull,
            height,
            motion,
            onReturn,
            onFormRest,
            overlayMessage,
            ...props
        } = this.props;
        return (
            <Motion
                style={{
                    left: spring(isRight && !isFull ? 50 : -5, motion),
                    width: spring(isFull ? 110 : 55, motion),
                    height: spring(isFull ? 110 : height, motion),
                    opacity: spring(isFull ? 1 : 0, motion),
                    circle: spring(isFull ? 1 : 0, {
                        stiffness: 180,
                        damping: 12
                    })
                }}
                onRest={onFormRest}
            >
                {style => (
                    <div>
                        <div
                            className={`form-highlight${isFull
                                ? ' success'
                                : ''}${isRight ? ' position-right' : ''}`}
                            style={{
                                left: `${style.left}%`,
                                width: `${style.width}%`,
                                height: `${style.height}%`
                            }}
                            ref={el => {
                                this.highlight = el;
                            }}
                            {...props}
                        />
                        <div
                            className="form-message"
                            style={{
                                display: style.opacity > 0 ? 'flex' : 'none',
                                opacity: style.opacity
                            }}
                        >
                            <div
                                className="form-message-content content-set-sm"
                                style={{ transform: `scale(${style.circle})` }}
                            >
                                <div className="form-message-circle">
                                    <Image
                                        src="./images/ic-checkmark.svg"
                                        alt="Success"
                                        className="form-message-image"
                                        shadow={false}
                                        lazyLoad={false}
                                    />
                                </div>
                                <p>
                                    <strong>{overlayMessage}</strong>
                                </p>
                                <button type="button" onClick={onReturn}>
                                    Return
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Motion>
        );
    }
}
