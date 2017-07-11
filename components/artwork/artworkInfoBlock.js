import React from 'react';

import { combineClassNames } from 'utils';

import 'scss/artwork.scss';

export default class ArtworkInfoBlock extends React.Component {
    render() {
        const { className, children, ...props } = this.props;
        return (
            <div
                className={combineClassNames('artwork-info', className)}
                {...props}
            >
                {children}
            </div>
        );
    }
}