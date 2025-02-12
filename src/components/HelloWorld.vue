<template>
    <div class="hello">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ msg: string }>();
</script>

<style scoped>
.hello {
    color: #2c3e50;
    margin-top: 20px;
}
</style>