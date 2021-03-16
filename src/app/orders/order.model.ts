import { Cargo } from '../../model/cargo.model';

export class Order {

    public status: string;

    public loadDate: string;

    public planedDeliveryDate: string;

    public actualDeliveryDate: string;

    public cargos: Cargo[];

    constructor(status: string, loadDate: string, planedDeliveryDate: string, actualDeliveryDate: string, cargos: Cargo[]) {
        this.status = status;
        this.loadDate = loadDate;
        this.planedDeliveryDate = planedDeliveryDate;
        this.actualDeliveryDate = actualDeliveryDate;
        this.cargos = cargos;
    }
}