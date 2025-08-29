export type ProductProps = {
    id?: number;
    name: string;
    description: string;
    brand: string;
    price: number;
    discounted_price: number;
    stock: number;
    url_image: string;
    created_at: Date;
    updated_at?: Date;
    id_category: number;
    tag: string;
    id_specs_smartphone?: number | null;
}


export class Product {
    private constructor(private props: ProductProps) { }

    public static with(props: ProductProps){
        return new Product(props);
    }

    public get id() {
        return this.props.id;
    }

    public get name() {
        return this.props.name;
    }

    public get description() {
        return this.props.description;
    }

    public get brand() {
        return this.props.brand;
    }

    public get price() {
        return this.props.price;
    }

    public get discounted_price() {
        return this.props.discounted_price;
    }

    public get stock() {
        return this.props.stock;
    }
    public get url_image() {
        return this.props.url_image;
    }

    public get created_at() {
        return this.props.created_at;
    }

    public get updated_at() {
        return this.props.updated_at;
    }
    public get id_category() {
        return this.props.id_category;
    }

    public get id_specs_smartphone() {
        return this.props.id_specs_smartphone;
    }

    public get tag() {
        return this.props.tag;
    }
}