import React from 'react';
import { Motion, spring } from 'react-motion';

import { SignInForm, SignUpForm, Overlay } from './';
import '../scss/signupform.scss';

const form = {
    signIn: 'signin',
    signUp: 'signup',
    motion: {
        stiffness: 180,
        damping: 19
    }
};

export default class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeForm: form.signIn,
            signedIn: false,
            signedUp: false,
            height: 0, // We don't know the height at this point
            highlightHeight: 0,
            isAnimating: false
        };
    }

    componentDidMount() {
        // Need to set the correct form size so Motion can animate correctly
        this.handleFormResize();
    }

    handleSubmit = e => {
        // Don't actually submit anything
        e.preventDefault();

        // Simulate time to submit
        setTimeout(() => {
            switch (this.state.activeForm) {
                case form.signIn:
                    this.setState({
                        signedIn: true,
                        isAnimating: true
                    });
                    break;
                case form.signUp:
                    this.setState({
                        signedUp: true,
                        isAnimating: true
                    });
                    break;
                default:
                    break;
            }
        }, 300);
    };

    handleFormResize = (currentForm = this.state.activeForm) => {
        // Set the size to the current form
        switch (currentForm) {
            case form.signIn:
                this.setState({
                    height: this.signIn.clientHeight,
                    highlightHeight:
                        this.signInActive.clientHeight /
                        this.signIn.clientHeight *
                        100
                });
                break;
            case form.signUp:
                this.setState({
                    height: this.signUp.clientHeight,
                    highlightHeight:
                        this.signUpActive.clientHeight /
                        this.signUp.clientHeight *
                        100
                });
                break;
            default:
                break;
        }
    };

    handleFormSwitch = currentForm => {
        this.setState({
            activeForm: currentForm,
            isAnimating: true
        });
        this.handleFormResize(currentForm);
    };

    handleFormRest = (el, removeStyles) => {
        if (el && removeStyles) {
            el.removeAttribute('style');
        }

        if (this.state.isAnimating) {
            this.setState({
                isAnimating: false
            });
        }
    };

    handleReturn = () => {
        if (this.state.signedIn) {
            this.setState({ signedIn: false, isAnimating: true });
        }
        if (this.state.signedUp) {
            this.setState({ signedUp: false, isAnimating: true });
        }
        this.handleFormResize();
    };

    render() {
        return (
            <Motion
                style={{
                    height: spring(this.state.height, form.motion)
                }}
                onRest={() => this.handleFormRest(this.form, true)}
            >
                {({ height }) => (
                    <div
                        className={`artwork-signupform${this.state.isAnimating
                            ? ''
                            : ' form-resting'}`}
                        style={{ height: height }}
                        ref={el => {
                            this.form = el;
                        }}
                    >
                        <Overlay
                            isRight={this.state.activeForm === form.signUp}
                            isFull={this.state.signedIn || this.state.signedUp}
                            height={this.state.highlightHeight}
                            motion={form.motion}
                            onReturn={this.handleReturn}
                            onFormRest={this.handleFormRest}
                            overlayMessage={
                                this.state.signedIn ? (
                                    'You have successfully logged in.'
                                ) : (
                                    'You have successfully created an account.'
                                )
                            }
                        />
                        <SignInForm
                            isActive={this.state.activeForm === form.signIn}
                            isSubmitted={this.state.signedIn}
                            motion={form.motion}
                            onSwitch={() => this.handleFormSwitch(form.signUp)}
                            onSubmit={this.handleSubmit}
                            onFormRest={this.handleFormRest}
                            formRef={el => {
                                this.signIn = el;
                            }}
                            activeRef={el => {
                                this.signInActive = el;
                            }}
                        />
                        <SignUpForm
                            isActive={this.state.activeForm === form.signUp}
                            isSubmitted={this.state.signedUp}
                            motion={form.motion}
                            onSwitch={() => this.handleFormSwitch(form.signIn)}
                            onSubmit={this.handleSubmit}
                            onFormRest={this.handleFormRest}
                            formRef={el => {
                                this.signUp = el;
                            }}
                            activeRef={el => {
                                this.signUpActive = el;
                            }}
                        />
                    </div>
                )}
            </Motion>
        );
    }
}
