export default class Coet {
    codi:string;
    propulsors:Array<number>;
    
    constructor(codi:string,propulsors:Array<number>){
        this.codi=codi;
        this.propulsors=propulsors;
    }
    
    addProp(prop:number):void{
        this.propulsors.push(prop);
    }
}