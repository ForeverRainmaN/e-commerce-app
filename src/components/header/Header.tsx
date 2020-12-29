import React, {FC} from 'react';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from "../../firebase/firebase.utils";

import './header.scss'
import {User} from "../../common/types";

interface HeaderProps extends RouteComponentProps {
    currentUser: User
}

const Header: FC<HeaderProps> = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className="logo"/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACTS
            </Link>
            {
                currentUser ?
                    <div className='option'
                         onClick={() => auth.signOut()}
                    >SIGN OUT
                    </div>
                    :
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
            }
        </div>
    </div>
);

export default withRouter(Header)
