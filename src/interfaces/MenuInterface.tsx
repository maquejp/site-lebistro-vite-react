export interface MenuSectionItemInterface {
    title: string;
}

export interface MenuSectionInterface {
    id: string;
    title: string;
    items: MenuSectionItemInterface[]
}

export interface MenuInterface {
    id: string;
    title: string;
    price: string;
    items: MenuSectionInterface[]
}