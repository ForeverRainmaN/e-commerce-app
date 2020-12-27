import React, {FC, InputHTMLAttributes} from 'react';

import './form-input.scss';
import {ChangeEvt} from "../../common/types";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    handleChange: (e: ChangeEvt) => void,
    label?: string,
    error?: string,
}

const FormInput: FC<FormInputProps> = (
    {
        handleChange,
        label,
        value,
        ...otherProps
    }) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps}/>
            {otherProps.error && <div>{otherProps.error}</div>}
            {
                label ?
                    <label className={`${String(value).length ? 'shrink' : ''} form-input-label`}>
                        {label}
                    </label>
                    : null
            }
        </div>
    )
}

export default FormInput


