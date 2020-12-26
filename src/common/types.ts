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