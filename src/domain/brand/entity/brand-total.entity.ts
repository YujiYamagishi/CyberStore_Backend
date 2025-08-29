export type BrandTotalProps = {
    brand: string;
    total: number;
}

export class BrandTotal{
    private constructor(private props: BrandTotalProps){};

    public static create(props: BrandTotalProps){

        if (props.total < 0) {
            throw new Error("Total cannot be negative.");
        }
        if (!props.brand || props.brand.trim() === '') {
            throw new Error("Brand name cannot be empty.");
        }

        return new BrandTotal(props);
    }

    public get brand(): string{
        return this.props.brand;
    }

    public get total(): number{
        return this.props.total;
    }

}