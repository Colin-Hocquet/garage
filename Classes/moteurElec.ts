import Moteur from "../Interface/moteur";
import Vehicule from "./vehicule";

export default class MoteurElectrique implements Moteur {

    vehicule!: Vehicule;

    public recharger(): void {
        console.log("La recharge électrique est terminée")
    }

    augmenterTours(): void {
        console.log("Vroum vroum les tours")
    }

}