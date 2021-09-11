<template>
    <div class="card rounded bg-transparent text-light m-3 p-3 d-flex">
        <div>
            <h3>{{coet.codi}}</h3>
            <p ><b class="text-primary"> Nº propulsors: </b> {{coet.propulsors.length}}
            <br><b class="text-success"> Velocitat: </b> {{velocitat}} km/h
            <br><b class="text-danger">  V max:      </b> {{velmax}} km/h</p>
        </div>
        <div class="d-flex mb-2" style="flex-flow: row wrap;">
            <div style="width:75%">
                <img style="max-width:100%; transform: rotate(-45deg);" alt="" src="https://c.tenor.com/GocCvG7hs78AAAAi/rocket-joypixels.gif">
            </div>
            <div class="row justify-content-center" style="width:20%; z-index: 2">
                <button class="btn btn-sm btn-warning m-1"      @click="edita()"     > Edita     </button>
                <button class="btn btn-sm btn-success m-1"      @click="accelera()" > Accelera  </button>
                <button class="btn btn-sm btn-danger m-1"       @click="frena()"    > Frena     </button>
                <button class="btn btn-sm btn-primary m-1"      @click="info()"     > Info      </button>
                <button class="btn btn-sm btn-secondary m-1"    @click="elimina()"  > Elimina   </button>
            </div>
        </div>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Coet from '../store/models/coet'

export default defineComponent ({
    props: {
        index: Number,
        coet: Coet
    },
    data() {
        return {
            velocitat:0,
            velmax:0
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
        edita() {
            let codi=prompt("Nou codi: ");
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
            this.$emit('actualitza', this.index, codi, props);
        },
        accelera() {
            if (this.velocitat<=(this.velmax-10)){
                this.velocitat+=10;
            }
        },
        frena() {
            if (this.velocitat>=10){
                this.velocitat-=10;
            }
        },
        info() {
            alert(`Informació del Coet:
            - Codi: ${this.coet?.codi}
            - Num. propulsors: ${this.coet?.propulsors.length} (${this.coet?.propulsors})
            - Velocitat màxima:  ${this.velmax} km/h
            - Velocitat actual:  ${this.velocitat} km/h`);
        },
        elimina() {
            this.$emit('elimina', this.index);
        }
    }
})
</script>