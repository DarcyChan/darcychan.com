import React from 'react';

import Artwork from 'components/artwork';
import { PageLead, Image } from 'components/common';

// Literal strings required for this to work
exports.data = {
    id: 1,
    path: `/designs/creditcardcheckout/`,
    category: `design`,
    type: `artwork`,
    title: `Credit Card Checkout`
};

export default class CreditCardCheckout extends React.Component {
    render() {
        const route = this.props.route;
        return (
            <Artwork route={route}>
                <PageLead>
                    <p>
                        A mockup of a credit card checkout page for a daily UI challenge.
                    </p>
                </PageLead>
                <Image src={'screen.png'} className="image-shadow" />
                <Image src={'screen-selectcard.png'} className="image-shadow" />
            </Artwork>
        );
    }
}