import React from 'react';

export default class Input extends React.Component {
    render() {
        const { label, id, type, ...props } = this.props;
        return (
            <div className="form-group">
                <label className="form-label" htmlFor={id}>
                    {label}
                </label>
                <input
                    id={id}
                    className="form-control"
                    type={type || 'text'}
                    {...props}
                />
            </div>
        );
    }
}
