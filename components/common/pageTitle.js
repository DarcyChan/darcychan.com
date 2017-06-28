import React from 'react';

export default class PageTitle extends React.Component {
    render() {
        const {children, className, props} = this.props;
        let classNames = className ? `page-title ${className}` : 'page-title'

        return(
            <h1 className={classNames} {...props}>
                {children}
            </h1>
        )
    }
}