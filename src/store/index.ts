import Coet from './models/coet'
import {iCoet} from '../types/tipus.interface'
import { createStore } from 'vuex'

export default createStore({
  state: {
    llistaCoets: [new Coet('32WESSDS', [10,30,80]), new Coet('LDSFJA32', [30,40,50,50,30,10])],
  } as iCoet,
  mutations: {
    creaCoet(state, dades: {codi:string, prop:Array<number>}): void {
      const nouCoet = new Coet(dades.codi, dades.prop);
      console.log(`Nou coet: ${nouCoet.codi}`);
      //state.coets.push("Hola");
    },
    addProp(state, index) {
      state.llistaCoets[index].propulsors.push(0);
    },
    removeProp(state, {coet, prop}){
      state.llistaCoets[coet].propulsors.splice(prop, 1);
    },
    newRocket(state, coet) {
      state.llistaCoets.push(coet);
    }
  },
  actions: {
  },
  modules: {
  }
})
