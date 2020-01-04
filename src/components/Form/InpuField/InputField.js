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
                        onChange={props.onchangeinput}
                        value={props.value}
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
                        type={props.type} className="form-control input-field" 
                        value={props.value}
                        onChange={props.onchangeinput}
                        {...props}
                    />
                </div>
            </Fragment>
        );
    }
}

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onchangeinput: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array
}

export default InputField;