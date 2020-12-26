import React, {Component} from 'react';
import {ShopPageSection} from "../../common/types";

import SHOP_DATA from "./shopPageState";
import SectionPreview from "../../components/preview-section/SectionPreview";

interface ShopPageState {
    sections: ShopPageSection[]
}

class ShopPage extends Component<{}, ShopPageState> {
    readonly state: Readonly<ShopPageState> = {
        sections: SHOP_DATA
    }

    render() {
        const {sections} = this.state;
        return (
            <div className='shopPage'>
                {
                    sections.map(({id, ...rest}) => (
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
}

export default ShopPage