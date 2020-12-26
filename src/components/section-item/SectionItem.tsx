import React, {FC} from 'react';

import './section-item.scss';
import {ShopPageItem} from "../../common/types";

const SectionItem: FC<ShopPageItem> = ({imageUrl, name, price}) => (
    <div className="section-item">
        <div className='image'
             style={{
                 backgroundImage: `url(${imageUrl})`
             }}
        />
        <div className='section-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
)

export default SectionItem