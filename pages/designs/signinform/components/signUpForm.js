import React from 'react';

import { Form, Input } from './';

const model = {
    defaultTitle: 'Have an Account?',
    defaultDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum enim sit amet viverra dictum.',
    activeTitle: 'Create an Account',
    submitButton: 'Create Account',
    toggleButton: 'Log In'
};

export default class SignUpForm extends React.Component {
    render() {
        return (
            <Form
                info={{
                    defaultTitle: model.defaultTitle,
                    defaultDesc: model.defaultDesc,
                    activeTitle: model.activeTitle,
                    toggleText: model.toggleButton
                }}
                reverse
                {...this.props}
            >
                <Input
                    id="signup-name"
                    label="Name"
                    type="text"
                    defaultValue="Darcy Chan"
                    required
                />
                <Input
                    id="signup-email"
                    label="Email"
                    type="email"
                    defaultValue="hello@example.com"
                    required
                />
                <Input
                    id="signup-password"
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
