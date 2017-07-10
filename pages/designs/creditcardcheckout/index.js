import React from 'react';

import { Artwork } from 'components/artwork';
import { PageContent, PageLead, Image } from 'components/common';

/* eslint-disable quotes */
exports.data = {
    id: 1,
    path: `/designs/creditcardcheckout/`,
    category: `design`,
    type: `artwork`,
    title: `Credit Card Checkout`
};
/* eslint-enable quotes */

export default class CreditCardCheckout extends React.Component {
    render() {
        const route = this.props.route;
        return (
            <Artwork route={route}>
                <PageLead>
                    <p>
                        A mockup of a credit card checkout page for a daily UI
                        challenge.
                    </p>
                </PageLead>
                <PageContent data={route.page.data}>
                    <Image src={'screen.png'} width={1024} height={1628} />
                    <Image
                        src={'screen-selectcard.png'}
                        width={1024}
                        height={336}
                    />
                </PageContent>
            </Artwork>
        );
    }
}
