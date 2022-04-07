import MoteurThermique from "../Interface/moteurThermique";
import Vehicule from "./vehicule";

export default class MoteurDiesel implements MoteurThermique {

    vehicule!: Vehicule;

    augmenterTours(): void {
        console.log("Vroum vroum les tours")

    }

    fairelePlein(): void {
        console.log("le plein de diesel est fait")
    }

    constructor() {

    }

}