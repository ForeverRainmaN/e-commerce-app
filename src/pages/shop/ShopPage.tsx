import React, {Component} from 'react';
import {Identifiable} from "../../common/types";

import SHOP_DATA from "./shopPageState";

interface ShopPageState {
    sections: ShopPageSection[]
}

interface ShopPageSection extends Identifiable {
    title: string,
    routeName: string,
    items: ShopPageItem[]
}

interface ShopPageItem extends Identifiable {
    name: string,
    imageUrl: string,
    price: number;
}


class ShopPage extends Component<{}, ShopPageState> {
    readonly state: Readonly<ShopPageState> = {
        sections: SHOP_DATA
    }

    render() {
        return (
            <div>Hi</div>
        )
    }
}

export default ShopPage