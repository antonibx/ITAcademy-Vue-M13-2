<template>
    <div>
        <h1 class="text-light">Carrereees</h1>
        <p>{{$store.state.coets[0] }}</p>
            <button class="btn btn-success m-2" @click="creaCoet('ABCD1234', [30, 20])">Crea coet</button>
            <button class="btn btn-info m-2" @click="veureCoets()">Veure coets</button>
    </div>
</template>

<script lang="ts">

export default {
}
</script>