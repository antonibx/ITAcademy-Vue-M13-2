<template>
    <div>
        <div class="card rounded bg-transparent text-light m-3 p-3 d-flex">
            <div>
                <h3>{{coet.codi}}</h3>
                <p ><b class="text-primary"> Nº propulsors: </b> {{coet.propulsors.length}}
                <br><b class="text-danger">  V max:      </b> {{velmax}} m/s</p>
            </div>
            <div class="d-flex mb-2" style="flex-flow: row wrap;">
                <div style="width:60%">
                    <img style="max-width:100%; transform: rotate(-45deg);" alt="" src="https://c.tenor.com/GocCvG7hs78AAAAi/rocket-joypixels.gif">
                </div>
                <div class="row justify-content-center" style="width:20%; z-index: 2">
                    <button class="btn btn-sm m-1 btn-warning" data-toggle="modal" :data-target="'#exampleModal'+index"  > Edita   </button> 
                    <button class="btn btn-sm m-1 btn-primary" @click="info()"                                  > Info      </button>
                    <button class="btn btn-sm m-1 btn-danger" @click="elimina()"                             > Elimina   </button>
                     
                </div>
            </div>
        </div>
        <div class="modal fade" :id="'exampleModal'+index" tabindex="-1" role="dialog" :aria-labelledby="'exampleModal'+index+'Label'" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content bg-dark">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edita</h5>
                    <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form name="formulari" @submit.prevent="editaCoet(event)">
                    <div class="modal-body">
                        <div class="has-validation mb-3">
                            <label for="codi" class="form-label">Codi: </label>
                            <input v-model="coets[index].codi" type="text" class="form-control">
                        </div>
                        <div class="has-validation mb-3" v-for="(propulsor, i) in coets[index].propulsors" :key="i">
                            <label for="propulsors" class="form-label">Propulsor {{i+1}}</label>
                            <button type="button" class="close text-light" @click="eliminaProp(i)">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <input v-model="coets[index].propulsors[i]" type="number" class="form-control"> 
                        </div>              
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-success" @click="afegirProp()">Afegir propulsor</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close">Tanca</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Coet from '../store/models/coet';
import store from '../store'

export default defineComponent ({
    name: 'FitxaCoet',
    props: {
        index: Number,
        coet: Coet
    },
    data() {
        return {
            velmax:0,
            nouCodi: '',
            nouPropulsor: 0
        }
    },
    computed: {
        coets: {
            get() {return store.state.llistaCoets},
            set(novaLlista:Array<Coet>) {store.state.llistaCoets = novaLlista}
        }
  },
    mounted() {
        let contador = 0;
        this.coet?.propulsors.forEach(element => {
            contador += element;
        });
        this.velmax = contador;
    },
    updated() {
        let contador = 0;
        this.coet?.propulsors.forEach(element => {
            contador += element;
        });
        this.velmax = contador;
    },
    methods: {
        info() {
            alert(`Informació del Coet:
            - Codi: ${this.coet?.codi}
            - Num. propulsors: ${this.coet?.propulsors.length} (${this.coet?.propulsors})
            - Velocitat màxima:  ${this.velmax} m/s
            `)
        },
        elimina() {
            this.$emit('elimina', this.index);
        },
        afegirProp() {
            store.commit('addProp', this.index);
        },
        eliminaProp(i:number) {
            store.commit('removeProp', {coet: this.index, prop:i})
        }
    }
})
</script>