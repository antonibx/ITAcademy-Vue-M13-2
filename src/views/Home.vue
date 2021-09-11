<template>
  <div class="home">
    <img alt="Vue logo" src="https://i.imgur.com/giexNQT.gif" style="height:200px"><!--src="../assets/logo.png"-->
    <Instruccions msg="Enunciat"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Instruccions from '../components/Instruccions.vue'; // @ is an alias to /src

@Options({
  components: {
    Instruccions,
  },
})
export default class Home extends Vue {}
</script>
