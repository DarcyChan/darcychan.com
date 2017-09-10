import React from 'react';
import { Motion, spring } from 'react-motion';

export default class Form extends React.Component {
    render() {
        const {
            formRef,
            activeRef,
            info,
            isActive,
            isSubmitted,
            motion,
            reverse,
            onSwitch,
            onSubmit,
            onFormRest,
            children,
            ...props
        } = this.props;
        const dir = reverse ? 1 : -1;
        return (
            <Motion
                style={{
                    opacity: spring(isActive && !isSubmitted ? 1 : 0, motion),
                    position: spring(isActive ? 0 : dir * 100, motion)
                }}
                onRest={() => onFormRest()}
            >
                {({ opacity, position }) => (
                    <div
                        className={`form-container${isActive
                            ? ' active'
                            : ''}${reverse ? ' reverse' : ''}${isSubmitted
                            ? ' submitted'
                            : ''}`}
                        {...props}
                        style={{
                            left: `${position}%`,
                            opacity: opacity,
                            visibility: opacity > 0 ? 'visible' : 'hidden',
                            transform:
                                opacity < 1 && opacity > 0
                                    ? 'translateZ(0)'
                                    : 'none'
                        }}
                        ref={formRef}
                    >
                        <Motion
                            style={{
                                position: spring(
                                    isSubmitted ? dir * 100 : 0,
                                    motion
                                )
                            }}
                        >
                            {({ position }) => (
                                <div
                                    className="form-content form-content-active"
                                    style={{
                                        left: `${position}%`
                                    }}
                                    ref={activeRef}
                                >
                                    {info &&
                                    info.activeTitle && (
                                        <h1 className="form-title">
                                            {info.activeTitle}
                                        </h1>
                                    )}
                                    {info &&
                                    info.activeDesc && <p>{info.activeDesc}</p>}
                                    <form onSubmit={onSubmit}>{children}</form>
                                </div>
                            )}
                        </Motion>
                        <Motion
                            style={{
                                position: spring(
                                    isSubmitted ? dir * -100 : 0,
                                    motion
                                )
                            }}
                        >
                            {({ position }) => (
                                <div
                                    className="form-content form-content-default"
                                    style={{
                                        left: `${position}%`
                                    }}
                                >
                                    {info &&
                                    info.defaultTitle && (
                                        <h1 className="form-title">
                                            {info.defaultTitle}
                                        </h1>
                                    )}
                                    {info &&
                                    info.defaultDesc && (
                                        <p>{info.defaultDesc}</p>
                                    )}
                                    <button type="button" onClick={onSwitch}>
                                        {info.toggleText}
                                    </button>
                                </div>
                            )}
                        </Motion>
                    </div>
                )}
            </Motion>
        );
    }
}
