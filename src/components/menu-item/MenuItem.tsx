import React, {FC} from 'react';
import './menu-item.scss';

interface MenuItemProps {
    title: string,
    imageUrl: string,
    size?: string
}

const MenuItem: FC<MenuItemProps> = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="content">
            <h1 className="title">
                {title.toUpperCase()}
            </h1>
            <span className="subtitle">
                    SHOP NOW
            </span>
        </div>
    </div>
)

export default MenuItem