import Personne from "./personne";
import Garage from "./garage";

export default class Garagiste extends Personne{

    garage: Garage;

    constructor(age: number, nom: string, garage: Garage) {
        super(age, nom);
        this.garage = garage;
    }
    conduire(): void {
        console.log("Je peux conduire")
    }

    presenterGarage(): void {
        console.log(`Je suis affilié au garage ${this.garage}`)
    }

    faireLePleinDeToutesLesVoitures(): void {

    }
}