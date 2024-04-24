<template>
    <div id="myFoot">
        <p>我是foot</p>
    </div>
</template>

<script>
//将此模块共享出去,名字是没有head
export default {
    name: 'myFoot'
}
</script>

<style scoped>
#myFoot {
    background-color: pink;
    display: flex;
    justify-content: center;
}
</style>