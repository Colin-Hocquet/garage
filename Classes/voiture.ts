import Vehicule from "./vehicule";
import Moteur from "../Interface/moteur";

export default class Voiture extends Vehicule{

    constructor(marque: string, moteur: Moteur, type: string) {
        super(marque,moteur, type);
    }
}