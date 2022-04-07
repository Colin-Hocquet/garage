export default abstract class Personne {

    public age: number;
    public nom: string;

    constructor(age: number, nom: string) {
        this.age = age;
        this.nom = nom;
    }

    public sePresenter() {
        console.log(`La personne est ${this.nom} et a ${this.age}`)
    }
}