import React from 'react';

export default class Input extends React.Component {
    render() {
        const { label, id, type, ...props } = this.props;
        const inputId = label.replace(/ /g, '-').toLowerCase();
        return (
            <div className="form-group">
                <label className="form-label" htmlFor={id || inputId}>
                    {label}
                </label>
                <input
                    id={id || inputId}
                    className="form-control"
                    type={type || 'text'}
                    {...props}
                />
            </div>
        );
    }
}
