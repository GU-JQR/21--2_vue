<template>
    <div class="loginReg">
        <!-- <el-button>push</el-button> -->
        <el-card class="boxCard">
            <div slot="header" class="clearfix " style="text-align: center;">****系统</div>
            <div>内容</div>
            <el-tabs stretch>
                <el-tab-pane label="登录" name="login">这是登录的界面</el-tab-pane>
                <el-tab-pane label="注册" name="register">这是注册的界面</el-tab-pane>
            </el-tabs>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                class="demo-ruleForm">
                <el-form-item label="用户名" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {}
        }
    }
}
</script>

<style scoped>
.loginReg {
    widows: 1000px;
    margin: 0 auto;
}

.boxCard {
    width: 600px;
    margin: 0 auto;
}
</style>