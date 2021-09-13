<template>
  <div class="container text-light">
    <h1>Coets</h1>
    <button class="btn m-2 btn-success" data-toggle="modal" data-target="#creaModal"> Nou coet </button>
    <router-link to="/carrera" class="btn btn-secondary">Carrera</router-link>
    <div class="row justify-content-center">
      <div v-for="(coet, index) in coets" :key="index" class="col-4">
        <FitxaCoet :index="index" :coet="coet" @elimina="eliminaCoet" @actualitza="editaCoet"/>
      </div>
    </div>
    <div class="modal fade" id="creaModal" tabindex="-1" role="dialog" aria-labelledby="creaModalLabel'" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content bg-dark">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Nou coet</h5><!---->
            <button type="button" id="tanca" class="close text-light" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form name="formulari" @submit="nouCoet(event)">
            <div class="modal-body">
              <div class="has-validation mb-3">
                <label for="codi" class="form-label">Codi: </label>
                <input v-model="coetTemp.codi" type="text" class="form-control">
              </div>
              <div class="has-validation mb-3" v-for="(propulsor, i) in coetTemp.propulsors" :key="i">
                <label for="propulsors" class="form-label">Propulsor {{i+1}}</label>
                <button type="button" class="close text-light" @click="eliminaProp(i)">
                    <span aria-hidden="true">&times;</span>
                </button>
                <input v-model="coetTemp.propulsors[i]" type="number" class="form-control">
              </div>
              <button type="button" class="btn btn-success" @click="afegirProp()">Afegir propulsor</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="submit" class="btn btn-primary" value="Crea">Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import FitxaCoet from '../components/FitxaCoet.vue';
import Coet from '../store/models/coet'
import store from '../store'

export default defineComponent ({
  name: "Taller",
  data() {
    return {
      coetTemp: new Coet('',[0])
    }
  },
  components: {
    FitxaCoet
  },
  computed: {
    coets: {
      get() {return store.state.llistaCoets},
      set(novaLlista) {store.state.llistaCoets = novaLlista}
    }
  },
  methods: {
    nouCoet(e:any) {
      if (!(/^[a-zA-Z0-9]{8}$/.test(this.coetTemp.codi))) {
        alert("El codi ha de ser de 8 caràcters")
      } else {
      let coet = new Coet(this.coetTemp.codi, this.coetTemp.propulsors)
      store.commit('newRocket', coet);
      this.coetTemp.codi = '';
      this.coetTemp.propulsors = [0];
      document.getElementById('tanca')?.click();
      }
    },
    afegirProp() {
      this.coetTemp.propulsors.push(0);
    },
    eliminaProp(i:number) {
      this.coetTemp.propulsors.splice(i, 1);
    },
    eliminaCoet(index:number) {
      store.state.llistaCoets.splice(index,1);
    },
    editaCoet(index:number, nouCodi:string, props:Array<number>) {
      store.state.llistaCoets[index].codi=nouCodi;
      store.state.llistaCoets[index].propulsors=props;
    }
  }
})
</script>
