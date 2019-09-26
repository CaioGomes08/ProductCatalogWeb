export class Product {
    public id: number;
    public title: string;
    public description: string;
    public price: number;
    public quantity: number;
    public categoryId: number;
    public image: any;
}

export class ProductViewModel {
    public id: number;
    public title: string;
    public description: string;
    public price: number;
    public quantity: number;
    public category: string;
    public image: any;

    public static CreateObjectFromJson(json) {
        const produtos = [];
        if (json.length > 0) {
            json.forEach(element => {
                const produto = new ProductViewModel();
                    produto.category = element.category;
                    produto.description = element.description;
                    produto.id = element.id;
                    produto.image =  element.image;
                    produto.price = element.price;
                    produto.title = element.title;
                    produtos.push(produto);
            });
        }
        return produtos;
    }
}

