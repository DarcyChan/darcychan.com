import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import Icon, { Glyph } from 'components/icon';
import { Image } from 'components/common';
import 'scss/preview.scss';

export default class Preview extends React.Component {
    render() {
        const { page, ...props } = this.props;
        return (
            <div className="preview">
                <Link className="preview-link" to={prefixLink(page.data.path)} {...props}>
                    <span className="preview-image-wrapper" style={{backgroundColor: page.data.bgColor}}>
                        <Image 
                            className="preview-image" 
                            src={ prefixLink(`${page.data.path}preview.png`) } 
                            alt="Preview" />
                    </span>
                    <span className="preview-info">
                        <span className="preview-subtitle">
                            {page.data.category}
                        </span>
                        <span className="preview-title">
                            <span className="preview-title-label">{page.data.title}</span>
                            <Icon className="preview-title-arrow" glyph={Glyph.ArrowRight} />
                        </span>
                    </span>
                </Link>
            </div>
        )
    }
}