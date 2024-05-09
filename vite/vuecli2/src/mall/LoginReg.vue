<template>
    <div class="loginReg">
        <el-card class="boxCard">
            <div slot="header" class="clearfix " style="text-align: center;">****系统</div>
            <div>内容</div>
            <el-tabs stretch v-model="activeName" @tab-click="handleClick">
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
                <el-tab-pane label="注册" name="register">
                    <el-form :model="RegisterFrom" status-icon :rules="rules" ref="RegisterFrom" label-width="100px"
                        class="demo-ruleForm">
                        <el-form-item label="用户名" prop="userName">
                            <el-input type="text" v-model="RegisterFrom.userName" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="userCode">
                            <el-input type="password" v-model="RegisterFrom.userCode" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="configUserCode">
                            <el-input type="password" v-model="RegisterFrom.configUserCode"
                                autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item style="text-align: center;">
                            <el-button type="primary" @click="submitForm('RegisterFrom')">提交</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
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
        var validateConfigUserCode = (rule, value, callBack) => {
            if (value === '') {
                callBack(new Error('请输入确认密码'))
            } else {
                callBack()
            }
        }
        return {
            activeName: "login",//默认显示的选项卡
            currentTab: "login",
            loginForm: {
                userName: '',
                userCode: '',
            },
            RegisterFrom: {
                userName: '',
                userCode: '',
                configUserCode: '',
            },
            rules: {
                userName: [
                    { validator: validateUserName, trigger: 'blur' }
                ],
                userCode: [
                    { validator: validateUserCode, trigger: 'blur' }
                ],
                configUserCode: [
                    { validator: validateConfigUserCode, trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.currentTab == 'login') {
                        alert('登录中');
                    } else if (this.currentTab == 'register') {
                        alert('注册中');
                    }
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        handleClick(tab, event) {
            console.log(tab.name);
            this.currentTab = tab.name;
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