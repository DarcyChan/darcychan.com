/*
    Preview List Component.
    The list of preview components.
*/

// External components
import React from 'react';

// Internal components
import { Preview } from 'components/preview';

export default class PreviewList extends React.Component {
    render() {
        const { artworks } = this.props;
        return (
            <div className="preview-list content-set">
                {artworks.map(item =>
                    <Preview
                        key={`${item.data.category}-${item.data.title}`}
                        page={item}
                    />
                )}
            </div>
        );
    }
}
