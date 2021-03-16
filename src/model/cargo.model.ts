export class Cargo {

    private cargoId: Number;

    private cargoName: String;

    private weight: Number;

    private status: String;


    constructor(cargoId: Number, cargoName: String, weight: Number, status: String) {
        this.cargoId = cargoId;
        this.cargoName = cargoName;
        this.weight = weight;
        this.status = status;
    }

}