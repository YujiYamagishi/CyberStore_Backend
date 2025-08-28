export type CategoryProps = {
    id?: number;
    name: string;
    description: string;
    created_at: Date;
    updated_at?: Date;
};

export class Category {
    private constructor(private props: CategoryProps) {}

    public get id() {
        return this.props.id;
    }

    public get name() {
        return this.props.name;
    }

    public get description() {
        return this.props.description;
    }

    public get createdAt() {
        return this.props.created_at;
    }

    public get updatedAt() {
        return this.props.updated_at;
    }
}