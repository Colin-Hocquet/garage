import Garagiste from "./garagiste";
import Vehicule from "./vehicule";

export default class Garage {

    garagiste: Garagiste[];
    vehicule: Vehicule[];

    constructor() {
       this.garagiste = [];
       this.vehicule = [];

    }
    public ajouterVehicule(...vehicule: Vehicule[]){
        for(let i =0; i<vehicule.length; i++)
        this.vehicule.push(vehicule[i]);
    }

    public ajouterGaragiste(garagiste: Garagiste){
        this.garagiste.push(garagiste);
    }


    public retirerVehicule(vehicule: Vehicule) {

    }

    public afficherGarage(){
        console.log(`Le garage comporte ${this.garagiste.length} garagistes et ${this.vehicule.length} véhicules`)
    }

    public afficherMotos(){
        console.log("Les motos du garage sont : ")
        for(let i = 0 ; i < this.vehicule.length; i++){
            if(this.vehicule[i].type == "Moto"){
                console.log(this.vehicule[i])
            }
        }
    }

    public afficherVoiture(){
        console.log("Les voitures du garage sont : ")
        for(let i = 0 ; i < this.vehicule.length; i++){
            if(this.vehicule[i].type == "Voiture"){
                console.log(this.vehicule[i])
            }
        }
    }

    public afficherCamions(){
        console.log("Les camions du garage sont :")
        for(let i = 0 ; i < this.vehicule.length; i++){
            if(this.vehicule[i].type == "Camion"){
                console.log(this.vehicule[i])
            }
        }
    }
}