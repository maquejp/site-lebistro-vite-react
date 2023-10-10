export interface CarteSectionItem {
    title: string;
    subtitle: string;
    price: string;
}

export interface CarteSection {
    title: string;
    notes: string[];
    items: CarteSectionItem[];
}