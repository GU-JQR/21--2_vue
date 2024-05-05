<template>
    <div>
        <div>我是商城首页</div>
        <router-link to="/goods" tag="div">物品</router-link>
        <router-link to="/adv">广告</router-link>
        <!-- <router-link to="/goods"></router-link> -->
    </div>
</template>

<script>
export default {
    name: 'home'
}
</script>

<style></style>