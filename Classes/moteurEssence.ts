import MoteurThermique from "../Interface/moteurThermique";
import Vehicule from "./vehicule";

export default class MoteurEssence implements MoteurThermique {

    vehicule!: Vehicule;

    augmenterTours(): void {
        console.log("Vroum vroum les tours")
    }


    fairelePlein(): void {
        console.log("Le plein d'essence est fait")
    }


}