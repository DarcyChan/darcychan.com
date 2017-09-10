import React from 'react';

import { Artwork } from 'components/artwork';
import { PageContent } from 'components/page';
import { Forms } from './components';

/* eslint-disable quotes */
exports.data = {
    id: 0,
    path: `/designs/signinform/`,
    category: `design`,
    type: `artwork`,
    title: `Sign In Form`,
    description: `An interactive prototype for animating between a sign in and registration form.`
};
/* eslint-enable quotes */

export default class CreditCardCheckout extends React.Component {
    render() {
        const route = this.props.route;
        return (
            <Artwork
                route={route}
                description={`
                    An interactive prototype for animating between a sign in and registration form. 
                    Toggle between signing in and creating an account. 
                    Click the orange Log In or Create Account button to see a success message 
                    (nothing actually gets submitted).`}
            >
                <PageContent data={route.page.data}>
                    <div className="image-shadow">
                        <Forms />
                    </div>
                </PageContent>
            </Artwork>
        );
    }
}
