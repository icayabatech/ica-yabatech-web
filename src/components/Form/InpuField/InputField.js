import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './InputField.css';

const InputField = props => {
    if(props.type === "select") {
        return (
            <Fragment>
                <div className="form-group input-form">
                    <label>{props.label}</label>
                    <select 
                        className="form-control input-field" 
                        {...props}
                    >
                        <option value=""></option>
                        {props.options.map((option,index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>                    
                </div>
            </Fragment>
        );
    }
    else {
        return (
            <Fragment>
                <div className="form-group input-form">
                    <label>{props.label}</label>
                    <input 
                        className="form-control input-field" 
                        {...props}
                    />
                </div>
            </Fragment>
        );
    }
}

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array
}

export default InputField;