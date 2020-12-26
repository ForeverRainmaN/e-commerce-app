import React, {FC, useState} from 'react';
import {ShopPageSection} from "../../common/types";
import SectionPreview from "../../components/preview-section/SectionPreview";

import SHOP_DATA from "./shopPageState";

type ShopPageState = ShopPageSection[]

const ShopPage: FC = () => {
    const [shopPageData,] = useState<ShopPageState>(SHOP_DATA)
    return (
        <div className='shopPage'>
            {
                shopPageData.map(({id, ...rest}) => (
                    <SectionPreview
                        key={id}
                        title={rest.title}
                        routeName={rest.routeName}
                        items={rest.items}
                        id={id}
                    />
                ))
            }
        </div>
    )
}

export default ShopPage
