import Vehicule from "./vehicule";
import Moteur from "../Interface/moteur";

export default class Camion extends Vehicule {

    public attacherRemorque(){
        console.log("Remorque attachée")
    }

    public detacherRemorque(){
        console.log("Remorque détachée")
    }

    constructor(marque: string, moteur: Moteur, type: string) {
        super(marque,moteur, type);
    }
}