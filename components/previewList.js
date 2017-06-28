import React from 'react';

import Preview from 'components/Preview';
import 'scss/previewList.scss';

export default class PreviewList extends React.Component {
    render() {
        const { page, artworks } = this.props;
        return (
            <div className="content-set">
                {artworks.map(item => (
                    <Preview key={`${item.data.category}-${item.data.title}`} page={item} />
                ))}
            </div>
        )
    }
}
