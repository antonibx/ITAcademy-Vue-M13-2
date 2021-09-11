<template>
  <div class="container text-light">
    <h1>Coets</h1>
    <button class="btn btn-success m-2" @click="creaCoet()">Crea coet</button>
    <div class="row justify-content-center">
      <div v-for="(coet, index) in llistaCoets" :key="index" class="col-4">
        <FitxaCoet :index="index" :coet="coet" @elimina="eliminaCoet" @actualitza="editaCoet"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import FitxaCoet from '../components/FitxaCoet.vue';
import Coet from '../store/models/coet'
import {iCoet} from '../types/tipus.interface'

export default defineComponent ({
  name: "Taller",
  components: {
    FitxaCoet
  },
  data() :iCoet {
    return {
    llistaCoets: []
    };
  },
  methods: {
    creaCoet(){
      //codi:string, props:number[]):void {
      let codi = prompt('Codi:');
      let props = [];
      let contador = 1;
      let seguir = true;
      do {
        let prop:number = parseInt((prompt(`propulsor ${contador}: `)) || '0');
        props.push(prop);
        contador++;
        if(prompt(`Entrar més propulsors? (Y/N)`)?.toUpperCase()=='N'){
          seguir = false;
        }
      }
      while (seguir);
      let coet = new Coet (codi!, props);
      this.llistaCoets.push(coet);
      alert(`Coet ${coet.codi} creat amb èxit`)
    },
    eliminaCoet(index:number) {
      this.llistaCoets.splice(index,1);
    },
    editaCoet(index:number, nouCodi:string, props:Array<number>) {
      this.llistaCoets[index].codi=nouCodi;
      this.llistaCoets[index].propulsors=props;
    }
  }
})
</script>
