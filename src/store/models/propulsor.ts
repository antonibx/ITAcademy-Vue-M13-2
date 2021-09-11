export default class Propulsor{
    potencia:number;

    constructor(potencia:number){
        this.potencia=potencia;
    }

    editProp(novaPotencia:number):void{
        this.potencia=novaPotencia;
    }
}