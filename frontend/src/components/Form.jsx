import React, { Component } from 'react';

export const FormInput = (props) => {
    return (
        <div className="field-group">
            <label htmlFor={props.id}>{props.label}: </label>
            <input type="text" id={props.id} onChange={props.onchange} value={props.value} />
        </div>
    );
};

export const EmailFormInput = (props) => {
    return <FormInput {...props} type="email" />
};

export const RequiredEmailFormINput = (props) => {
    return <EmailFormInput {...props} required={true} />
};

export const TextAreaInput = (props) => {
    return (
        <div className="field-group">
            <label htmlFor={props.id}>{props.label}: </label>
            <textarea id={props.id} onChange={props.onchange} value={props.value} />
        </div>
    );
};