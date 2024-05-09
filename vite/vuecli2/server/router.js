const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const sqlClient = require("./config.js")
const jwt = require("jsonwebtoken")
// 注册
router.post("/register", (req, res) => {
  const { username, password } = req.body;
  const sql = "insert into tb_user(username,password) values(?,?)";
  const arr = [username, password]
  sqlClient(sql, arr, result => {

    if (result.affectedRows > 0) {
      res.send({
        status: 200,
        msg: '注册成功'
      })
    }
    else {
      res.send({
        status: 401,
        msg: '注册失败'
      })
    }
  })
})

// 登录
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "select * from  tb_user where username=? and password=?";
  const arr = [username, password]
  sqlClient(sql, arr, result => {
    console.log(result)
    if (result.length > 0) {
      let token = jwt.sign({
        username,
        id: result[0].id
      }, 'mykeys')
      res.send({
        status: 200,
        // result
        token,
        username
      })
    }
    else {
      res.send({
        status: 401,
        msg: '登录失败'
      })
    }
  })
})

module.exports = router;
