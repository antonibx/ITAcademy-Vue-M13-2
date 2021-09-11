import Coet from './models/coet'

import { createStore } from 'vuex'

export default createStore({
  state: {
    coets: [],
  },
  mutations: {
    creaCoet(state, dades: {codi:string, prop:Array<number>}): void {
      const nouCoet = new Coet(dades.codi, dades.prop);
      console.log(`Nou coet: ${nouCoet.codi}`);
      //state.coets.push("Hola");
    }
  },
  actions: {
  },
  modules: {
  }
})
