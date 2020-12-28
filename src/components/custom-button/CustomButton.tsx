import React, {ButtonHTMLAttributes, FC} from 'react';

import './custom-button.scss';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isGoogleSignIn?: boolean
}

const CustomButton: FC<CustomButtonProps> =
    ({children, isGoogleSignIn, ...otherProps}) =>
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>

export default CustomButton