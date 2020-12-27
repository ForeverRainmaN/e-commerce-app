// data interfaces

import {ChangeEvent, FormEvent} from "react";

export interface Identifiable {
    id: number;
}

export interface ShopPageSection extends Identifiable {
    title: string,
    routeName: string,
    items: ShopPageItem[]
}

export interface ShopPageItem extends Identifiable {
    name: string,
    imageUrl: string,
    price: number;
}

// events

export type ChangeEvt = ChangeEvent<HTMLInputElement>
export type FormEvt = FormEvent<HTMLFormElement>
export type ObjectLiteral = { [key: string]: any };