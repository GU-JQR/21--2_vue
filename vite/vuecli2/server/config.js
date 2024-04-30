const mysql=require("mysql");
const client=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"123456",
  database:"vuedb"
})

const sqlClient=(sql,arr,callback) =>{
  client.query(sql,arr,(err,result) =>{
    if(err){
      console.log(err);
      return;
    }
    callback(result)
  })
}

module.exports=sqlClient;
