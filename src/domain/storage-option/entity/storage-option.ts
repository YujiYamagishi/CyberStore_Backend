export type StorageOptionProps = {
    id?: number;
    size: string;
    id_product: number;
    created_at: Date;
    updated_at?: Date;
};

export class StorageOption {
    private constructor(private props: StorageOptionProps) { }

    public static with(props: StorageOptionProps) {
        return new StorageOption(props);
    }

    public get id() {
        return this.props.id;
    }

    public get size() {
        return this.props.size;
    }

    public get id_product() {
        return this.props.id_product;
    }

    public get created_at() {
        return this.props.created_at;
    }

    public get updated_at() {
        return this.props.updated_at;
    }
}