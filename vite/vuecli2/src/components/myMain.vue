<template>
    <div id="myMain">
        <p>我是main</p>
    </div>
</template>

<script>
//将此模块共享出去,名字是没有
export default {
    name: 'myMain'
}
</script>

<style scoped>
#myMain {
    height: 500px;
    background-color: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>