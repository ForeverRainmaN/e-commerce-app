import React, {FC} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';

import './menu-item.scss';

interface MenuItemProps extends RouteComponentProps {
    title: string,
    imageUrl: string,
    linkUrl: string
    size?: string,
}

const MenuItem: FC<MenuItemProps> = (
    {
        history,
        match,
        ...rest
    }) => (
    <div className={`${rest.size} menu-item`}
         onClick={() => history.push(`${match.url}${rest.linkUrl}`)}>

        <div className='background-image' style={{
            backgroundImage: `url(${rest.imageUrl})`
        }}/>

        <div className="content">
            <h1 className="title">
                {rest.title.toUpperCase()}
            </h1>
            <span className="subtitle">
                    SHOP NOW
            </span>
        </div>
    </div>
)

export default withRouter(MenuItem)
