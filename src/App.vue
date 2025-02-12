<template>
    <div id="app">
        <h1>Welcome to Vue Webpack Starter</h1>
        <h2 @click="changeName">{{ nameList[idx] }}</h2>
        <HelloWorld msg="Hello Vue!" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import HelloWorld from './components/HelloWorld.vue'

const nameList = ["chiko", "angle", "meimei best good", "mather"];
const idx = ref(0);

function changeName() {
    idx.value = (idx.value + 1) % nameList.length;
}
</script>

<style lang="scss">
#app {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 2rem;

    h1~h2 {
        color: red;
        cursor: pointer;
        user-select: none;
    }
}
</style>