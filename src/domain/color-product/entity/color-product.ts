export type ColorProductProps = {
    id?: number;
    id_product: number;
    hex_code: string;
    name: string;
    created_at: Date;
    updated_at?: Date;
};

export class ColorProduct {
    private constructor(private props: ColorProductProps) { }

    public static with(props: ColorProductProps) {
        return new ColorProduct(props);
    }

    public get id() {
        return this.props.id;
    }
    public get id_product() {
        return this.props.id_product;
    }

    public get hex_code() {
        return this.props.hex_code;
    }
    public get name() {
        return this.props.name;
    }

    public get created_at() {
        return this.props.created_at;
    }

    public get updated_at() {
        return this.props.updated_at;
    }
}