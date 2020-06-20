import { Clothes } from './clothes';

export class CartItem {
    id: string;
    name: string;
    imageUrl: string;
    unitPrice: number;
    quantity: number;
    constructor(cloth: Clothes){
        this.id = cloth.id;
        this.name = cloth.name;
        this.imageUrl = cloth.imageurl;
        this.unitPrice = cloth.unitPrice;
        this.quantity = 1;
    }
}
