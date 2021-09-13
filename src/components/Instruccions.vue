<template>
  <div class="container rounded text-center bg-light p-5" style="margin-top:-50px">
    <h1>{{ msg }}</h1>
    <p>Volem fer un software de carreres de coets. </p>
    <p class="text-left">Un coet està identificat per un codi de 8 caràcters i un número de propulsors. Realitza els següents passos: ( Intenta seguir l’esquema de MVC, separant en diferents directoris el que és la vista del model i el controlador). El codi haurà d’estar preparat per aceptar 2 coets o 99999999 coets (cal que sigui escalabre utilitzant funcions genèriques)</p>
    <ol class="text-left">
      <li> Creem dos coets amb els codis “32WESSDS” y “LDSFJA32”. El primer coet tindrà 3 propulsors (potència màxima: 10,30,80) i el segon 6 propulsors (potència màxima: 30,40,50,50,30,10).</li>
      <li> Mostrar a pantalla el codi dels coets i el número de propulsors que té.</li>
      <li> Fes una funció que calculi la potència màxima del coet (serà el sumatori de les potències màximes dels propulsors).</li>
      <li> El coet tindrà dos mètodes, accelerar o frenar i augmentarà o es reduirà de 10 en 10 la potencia del propulsor fins a un màxim de 120.</li>
      <li> Afegir a la vista botons per permetre a un usuari crear, accelerar, frenar i veure la informació dels coets.</li>
    </ol>
    <router-link to="/coets" class="btn btn-dark text-light">Coets</router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
