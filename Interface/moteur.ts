import Vehicule from "../Classes/vehicule";

export default interface Moteur {

     vehicule: Vehicule;

     augmenterTours(): void;
}