import {ChangeEvent, FormEvent} from "react";
import {FirebaseUser} from "../firebase/firebase.utils";

// data interfaces

export interface Identifiable {
    id: number | string;
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

export type User = Identifiable & {
    [key in string | number]: string;
} | FirebaseUser

export interface FormValues {
    email: string,
    password: string
}

export type ObjectLiteral = { [key: string]: any };
// events

export type ChangeEvt = ChangeEvent<HTMLInputElement>
export type FormEvt = FormEvent<HTMLFormElement>
