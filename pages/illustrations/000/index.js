import React from 'react';

import Artwork from 'components/artwork';
import MainImage from './main.png';

// Literal strings required for this to work
exports.data = {
    id: 0,
    path: `/illustrations/000/`,
    category: `illustration`,
    type: `artwork`,
    title: `000`,
    date: `2016`
};

export default class Illustration000 extends React.Component {
    render() {
        const data = this.props.route.page.data;

        return (
            <Artwork data={data}>
                <img src={MainImage} />
            </Artwork>
        );
    }
}