<template>
    <div class="loginReg">
        <!-- <el-button>push</el-button> -->
        <el-card class="boxCard">
            <div slot="header" class="clearfix " style="text-align: center;">****系统</div>
            <div>内容</div>
            <el-tabs stretch>
                <el-tab-pane label="登录" name="login">
                    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px"
                        class="demo-ruleForm">
                        <el-form-item label="用户名" prop="userName">
                            <el-input type="text" v-model="loginForm.userName" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="userCode">
                            <el-input type="password" v-model="loginForm.userCode" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item style="text-align: center;">
                            <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="注册" name="register">这是注册的界面</el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        //验证规则
        var validateUserName = (rule, value, callBack) => {
            if (value === '') {
                callBack(new Error('请输入用户名'))
            } else {
                callBack()
            }
        }

        var validateUserCode = (rule, value, callBack) => {
            if (value === '') {
                callBack(new Error('请输入密码'))
            } else {
                callBack()
            }
        }
        return {
            loginForm: {
                userName: '',
                userCode: '',
            },
            rules: {
                userName: [
                    { validator: validateUserName, trigger: 'blur' }
                ],
                userCode: [
                    { validator: validateUserCode, trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
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