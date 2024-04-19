<template>
    <div id="myHead">
        <p>我是导航菜单header</p>
    </div>
</template>

<script>
//将此模块共享出去,名字是没有head
export default {
    name: 'myHead'
}
</script>

<style scoped>
#myHead {
    background-color: yellow;
    display: flex;
    justify-content: center;
}
</style>