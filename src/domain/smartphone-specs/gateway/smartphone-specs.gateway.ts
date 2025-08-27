import { SmartphoneSpecs } from "../entity/smartphone-specs";

export interface SmartphoneSpecsGateway{
    list(): Promise<SmartphoneSpecs[]>;

}