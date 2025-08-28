export type SmartphoneSpecsProps = {
    id?: number;
    screen_size: string;
    cpu: string;
    total_cores: string;
    main_camera: string;
    front_camera: string;
    battery: string;
    created_at: Date;
    updated_at?: Date;
}


export class SmartphoneSpecs {
    private constructor(private props: SmartphoneSpecsProps) { }

    public get id() {
        return this.props.id;
    }

    public get screen_size() {
        return this.props.screen_size;
    }

    public get cpu() {
        return this.props.cpu;
    }

    public get total_cores() {
        return this.props.total_cores;
    }

    public get main_camera() {
        return this.props.main_camera;
    }

    public get front_camera() {
        return this.props.front_camera;
    }

    public get battery() {
        return this.props.battery;
    }

    public get createdAt() {
        return this.props.created_at;
    }

    public get updatedAt() {
        return this.props.updated_at;
    }
}