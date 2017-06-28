import React from 'react';

import Artwork from 'components/artwork';
import MainImage from './main.png';

// Literal strings required for this to work
exports.data = {
    id: 0,
    path: `/projects/snazzymaps/`,
    category: `project`,
    type: `artwork`,
    title: `Snazzy Maps`,
    date: `2015`
};

export default class SnazzyMaps extends React.Component {
    render() {
        const data = this.props.route.page.data;

        return (
            <Artwork data={data}>
                <img src={MainImage} />
            </Artwork>
        );
    }
}