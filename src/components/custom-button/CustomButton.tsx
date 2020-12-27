import React, {ButtonHTMLAttributes, FC} from 'react';

import './custom-button.scss';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const CustomButton: FC<CustomButtonProps> =
    ({children, ...otherProps}) =>
        <button className='custom-button' {...otherProps}>
            {children}
        </button>


export default CustomButton