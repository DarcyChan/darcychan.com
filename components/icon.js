import React from 'react';

import ArrowLeft from 'assets/arrow-left.svg';
import ArrowRight from 'assets/arrow-right.svg';
import Close from 'assets/close.svg';
import Menu from 'assets/menu.svg';

export default class Icon extends React.Component{
    render() {
        const { glyph, ...props } = this.props;
        return(
            // <svg {...props}>
            //     <use xlinkHref={`#${glyph.id}`} />
            // </svg>
            <img src={glyph} {...props} />
        )
    }
}

export const Glyph = {
    ArrowLeft: ArrowLeft,
    ArrowRight: ArrowRight,
    Close: Close,
    Menu: Menu
};
