import React from 'react';
import { prefixLink } from 'gatsby-helpers';

import ArrowLeft from 'assets/arrow-left.svg';
import ArrowRight from 'assets/arrow-right.svg';
import Close from 'assets/close.svg';
import Logo from 'assets/logo.svg';
import Menu from 'assets/menu.svg';

export default class Icon extends React.Component {
    render() {
        const { glyph, ...props } = this.props;
        return <img src={prefixLink(glyph)} {...props} alt="" />;
    }
}

export const Glyph = {
    ArrowLeft: ArrowLeft,
    ArrowRight: ArrowRight,
    Close: Close,
    Logo: Logo,
    Menu: Menu
};
