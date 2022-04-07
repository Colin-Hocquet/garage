import Moteur from "../Interface/moteur";

export default abstract class Vehicule {


    protected marque: string;
    moteur: Moteur;
    type: string;


    constructor(marque: string, moteur: Moteur ,type: string) {
        this.marque = marque;
        this.moteur = moteur;
        this.type = type;
    }

    public avancer(){
        console.log("J'avance")
    }

    public reculer(){
        console.log("Je recule")
    }

    public freiner(){
        console.log("Je freine")
    }

    public afficherVehicule(){
        console.log(`Mon véhicule est de la marque ${this.marque}`)
    }
}