<template>
    <div class="container text-light">
        <h1>Carrera</h1>
        <div class="row justify-content-center align-items-center">
            <div class="col-3">Temps: {{temps}} segons</div>
            <div class="col-3">
                <button class="btn btn-sm m-2 btn-success" @click="cronometre()"> Inici </button>
                <button class="btn btn-sm m-2 btn-danger"  @click="pararTemps()"> Pausa </button>
                <button class="btn btn-sm m-2 btn-warning" @click="reiniciaTemps()"> Reinicia </button>
            </div>
            <div class="col-3">Recorregut: <input class="input-sm" style="width:30%" type="number" v-model="distancia"> metres</div>
        </div>
        <div class="row justify-content-center">
            <div v-for="(coet, index) in coets" :key="index" class="col-12">
                <CoetCarreres :index="index" :temps="temps" :distancia="distancia" :coet="coet" @pararTemps="pararTemps" @reiniciaTemps="reiniciaTemps"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import Coet from '../store/models/coet'
import CoetCarreres from '../components/CoetCarreres.vue' 
import store from '../store'

export default defineComponent ({
    components: {
        CoetCarreres
    },
    data() {
        return {
            temps: 0,
            crono: 0,
            distancia: 1000
        }
    },
    computed: {
        coets: {
        get() {return store.state.llistaCoets},
        set(novaLlista: Array<Coet>) {store.state.llistaCoets = novaLlista}
        }
    },
    methods: {
        cronometre() {
            this.crono = setInterval(() => {
                this.temps += 1;
            }, 1000);
        },
        pararTemps() {
            clearInterval(this.crono);
        },
        reiniciaTemps() {
            clearInterval(this.crono);
            this.temps = 0
        }
    }
})
</script>