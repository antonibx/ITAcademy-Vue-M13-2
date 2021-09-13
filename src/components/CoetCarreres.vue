<template>
    <div class="row">
        <div class="card rounded text-light m-3 p-3 bg-transparent col-12 d-flex" style="flex-flow: row wrap;">
            <div class="d-flex mb-2 justify-content-center" style="flex-flow: row wrap; width:20%; z-index: 2">
                <div>
                    <h3>{{coet.codi}}</h3>
                    <p ><b class="text-primary">Posicio: </b> {{posicio}}%
                    <br><b class="text-success"> Velocitat: </b> {{velocitat}} m/s
                    <br><b class="text-danger">  V max:      </b> {{velmax}} m/s</p>
                </div>
                <div class="row justify-content-center">
                    <button class="btn btn-sm m-1 btn-success" @click="accelera()"                              > Accelera  </button>
                    <button class="btn btn-sm m-1 btn-danger"  @click="frena()"                                 > Frena     </button>  
                </div>
            </div>
            <div style="border-left: 6px solid white;"></div>
            <div style="width:70%; position:relative">
                <img :style="`height: 130px; transform: rotate(45deg); position:absolute; left:${posicio-5}%`" alt="" src="https://c.tenor.com/GocCvG7hs78AAAAi/rocket-joypixels.gif">
            </div>
            <div style="border-left: 6px solid white;"></div>
        </div>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Coet from '../store/models/coet';
import store from '../store'

export default defineComponent ({
    name: 'CoetCarrera',
    props: {
        index: Number,
        coet: Coet,
        temps: Number,
        distancia: Number
    },
    data() {
        return {
            velocitat:0,
            velmax:0,
        }
    },
    computed: {
        coets: {
            get() {return store.state.llistaCoets},
            set(novaLlista:Array<Coet>) {store.state.llistaCoets = novaLlista}
        },
        posicio: {
            get():number {
                let pos = parseFloat(((this.velocitat*this.temps!/this.distancia!)*100).toFixed(2));
                if (pos>=100){
                    alert(`Guanya el coet ${this.coet?.codi} recorrent ${this.distancia!} metres en ${this.temps!} segons!`)
                    this.$emit('reiniciaTemps');
                }
                return pos},
            set(novaPosicio:number) {this.posicio = novaPosicio}
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
        accelera() {
            if (this.velocitat<=(this.velmax-10)){
                this.velocitat+=10;
            } else if(this.velocitat<this.velmax){
                this.velocitat=this.velmax
            }
        },
        frena() {
            if (this.velocitat>=10){
                this.velocitat-=10;
            } else if(this.velocitat>0){
                this.velocitat=0
            }
        }
    }
})
</script>