/*
    Icon Component.
    A common component to render an SVG icon.
*/

import React from 'react';

import ArrowRight from 'assets/arrow-right.svg';
import Close from 'assets/close.svg';
import Logo from 'assets/logo.svg';
import Menu from 'assets/menu.svg';
import Photo from 'assets/photo.svg';

export default class Icon extends React.Component {
    render() {
        const { glyph, ...props } = this.props;
        return (
            <svg {...props}>
                <use xlinkHref={`#${glyph.id}`} />
            </svg>
        );
    }
}

export const Glyph = {
    ArrowRight: ArrowRight,
    Close: Close,
    Logo: Logo,
    Menu: Menu,
    Photo: Photo
};
