import Garage from "./Classes/garage";
import Garagiste from "./Classes/garagiste";
import Camion from "./Classes/camion";
import MoteurEssence from "./Classes/moteurEssence";
import MoteurDiesel from "./Classes/moteurDiesel";
import Voiture from "./Classes/voiture";
import MoteurElectrique from "./Classes/moteurElec";
import Moto from "./Classes/moto";

const garage: Garage = new Garage();
const garagiste: Garagiste = new Garagiste(35, "Pablo", garage);
const moteurEssence: MoteurEssence = new MoteurEssence();
const moteurDiesel: MoteurDiesel = new MoteurDiesel();
const moteurElectrique: MoteurElectrique = new MoteurElectrique();
const camion: Camion = new Camion("Ferrari", moteurDiesel, "Camion");
const camion2: Camion = new Camion("Tesla", moteurElectrique, "Camion");
const voiture: Voiture = new Voiture("Audi", moteurEssence, "Voiture");
const moto: Moto = new Moto("Suzuki", moteurEssence, "Moto");
camion.afficherVehicule();
garagiste.sePresenter();
garage.afficherGarage();
garage.ajouterVehicule(camion, camion2, voiture,moto);
garage.ajouterGaragiste(garagiste)
garage.afficherGarage();
camion.moteur.augmenterTours();
garage.afficherVoiture();
garage.afficherCamions();
garage.afficherMotos();
garagiste.presenterGarage();
