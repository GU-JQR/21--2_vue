<template>
    <div class="loginReg">
        <el-card class="boxCard">
            <div slot="header" class="clearfix " style="text-align: center;">****系统</div>
            <div>内容</div>
            <el-tabs stretch v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="登录" name="login">
                    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px"
                        class="demo-ruleForm">
                        <el-form-item label="用户名" prop="username">
                            <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item style="text-align: center;">
                            <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="注册" name="register">
                    <el-form :model="RegisterFrom" status-icon :rules="rules" ref="RegisterFrom" label-width="100px"
                        class="demo-ruleForm">
                        <el-form-item label="用户名" prop="username">
                            <el-input type="text" v-model="RegisterFrom.username" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" v-model="RegisterFrom.password" autocomplete="off"></el-input>
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
import api from '../api'

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
                username: '',
                password: '',
            },
            RegisterFrom: {
                username: '',
                password: '',
                configUserCode: '',
            },
            rules: {
                username: [
                    { validator: validateUserName, trigger: 'blur' }
                ],
                password: [
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
                        api.log(this.loginForm).then(res => {
                            console.log("登录...");
                            this.$router.push('/home')
                        })
                    } else if (this.currentTab == 'register') {
                        console.log(this.RegisterFrom);
                        api.register(this.RegisterFrom).then(res => {
                            console.log("注册...");
                        })
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