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

// Image dimensions for lazy loading
const dimens = {
    screen: {
        width: 1328,
        height: 1709
    },
    selectCard: {
        width: 1328,
        height: 336
    }
};

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
                    <Image
                        src={'images/screen.png'}
                        alt="Credit Card Form"
                        width={dimens.screen.width}
                        height={dimens.screen.height}
                    />
                    <Image
                        src={'images/screen-selectcard.png'}
                        alt="Selecting an Existing Credit Card"
                        width={dimens.selectCard.width}
                        height={dimens.selectCard.height}
                    />
                </PageContent>
            </Artwork>
        );
    }
}
