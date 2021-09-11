import Coet from '../models/coet'

let coets:[Coet];
let coet:Coet;
let regexCodi = /^(?<![\w\d])[0-9a-zA-Z]{8}\b/

export default function creaCoet(codi: string, propulors:[number]) {
    let nouCoet = new Coet(codi, propulors);
    console.log(`Nou coet: ${codi}`);
    coets.push(nouCoet);
}
/*
export default function veureCoets() {
    coets.forEach(coet => alert(coet));
}*/