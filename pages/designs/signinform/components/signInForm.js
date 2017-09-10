import React from 'react';

import { Form, Input } from './';

const model = {
    defaultTitle: 'Need an account?',
    defaultDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum enim sit amet viverra dictum.',
    activeTitle: 'Sign In',
    submitButton: 'Log In',
    toggleButton: 'Create Account'
};

export default class SignInForm extends React.Component {
    render() {
        return (
            <Form
                info={{
                    defaultTitle: model.defaultTitle,
                    defaultDesc: model.defaultDesc,
                    activeTitle: model.activeTitle,
                    toggleText: model.toggleButton
                }}
                {...this.props}
            >
                <Input
                    id="signin-email"
                    label="Email"
                    type="email"
                    defaultValue="hello@example.com"
                    required
                />
                <Input
                    id="signin-password"
                    label="Password"
                    type="password"
                    defaultValue="example"
                    required
                />
                <button type="submit">{model.submitButton}</button>
            </Form>
        );
    }
}
