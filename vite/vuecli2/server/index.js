const express=require("express");
const app=express();
const cors = require("cors");
const bodyParser=require("body-parser");
const router=require('./router.js')
app.use(cors());
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use("/api",router);

app.listen(3000,() =>{
  console.log(3000)
});
