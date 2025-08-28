export type ReviewProps = {
    id?: number;
    id_product: number;
    rating: number;
    message: string;
    id_user: number;
    created_at: Date;
    updated_at?: Date;
}


export class Review {
    private constructor(private props: ReviewProps) { }

    public get id() {
        return this.props.id;
    }

    public get id_product() {
        return this.props.id_product;
    }

    public get rating() {
        return this.props.rating;
    }

    public get message() {
        return this.props.message;
    }

    public get id_user() {
        return this.props.id_user;
    }

    public get created_at() {
        return this.props.created_at;
    }

    public get updated_at() {
        return this.props.updated_at;
    }

    }
