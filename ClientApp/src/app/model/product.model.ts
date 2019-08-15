export class Product{
    public id: number;
    public title: string;
    public description: string;
    public price: number;
    public quantity: number;
    public categoryId: number;
    public image: any;
}

export class ProductViewModel{
    public id: number;
    public title: string;
    public description: string;
    public price: number;
    public quantity: number;
    public category: string;
    public image: any;
}