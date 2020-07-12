export class Clothes {
    id: string;
    sku: string;
    name: string;
    description: string;
    unitPrice: number;
    imageurl: string;
    active: boolean = true;
    unitsInStock: number;
    createdOn: Date = new Date();
    updatedOn: Date = null;
    constructor(){}
}
