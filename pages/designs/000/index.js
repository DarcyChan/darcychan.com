import React from 'react';

import Artwork from 'components/artwork';
import MainImage from './main.png';

// Literal strings required for this to work
exports.data = {
    id: 1,
    path: `/designs/000/`,
    category: `design`,
    type: `artwork`,
    title: `000`,
    date: `2016`
};

export default class Design000 extends React.Component {
    render() {
        const data = this.props.route.page.data;

        return (
            <Artwork data={data}>
                <img src={MainImage} />
            </Artwork>
        );
    }
}