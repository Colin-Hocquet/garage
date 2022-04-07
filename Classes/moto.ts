import Vehicule from "./vehicule";
import Moteur from "../Interface/moteur";

export default class Moto extends Vehicule {

    public faireUnWheeling(){
        console.log("Je Wheel")
    }

    constructor(marque: string, moteur: Moteur, type: string) {
        super(marque,moteur, type);
    }
}