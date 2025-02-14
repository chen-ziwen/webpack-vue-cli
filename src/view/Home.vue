<template>
    <main>
        <nav>
            <router-link class="links" v-for="link in links" :to="link.path">{{ link.name }}</router-link>
        </nav>
        <aside>
            <router-view></router-view>
        </aside>
    </main>
</template>

<script lang='ts' setup>

const links = [
    { name: "主页", path: "/" },
    { name: "测试", path: "/test" },
    { name: "测试2", path: "/test2" }
];
</script>

<style lang='scss' scoped>
nav {
    height: 100px;
    background-color: lightblue;
    display: flex;
    align-items: center;

    .links {
        padding: 30px;
    }
}
</style>