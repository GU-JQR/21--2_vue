<template>
    <div>
        <!-- <myHead></myHead>
        <myMain></myMain>
        <myFoot></myFoot> -->
        <router-view></router-view>
    </div>
</template>
<!-- template只能有一个根标签,(根标签里面可以有多个标签) -->
<script>
import { a, cal } from './components/exp.js'
console.log(a);
cal();
import myHead from './components/myHead.vue'
import myMain from './components/myMain.vue'
import myFoot from './components/myFoot.vue'
export default {
    name: 'App',
    components: {
        myHead,
        myMain,
        myFoot,
    }
}
</script>

<style></style>