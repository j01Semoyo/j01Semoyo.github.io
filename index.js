const express = require("express");
const app = express();
const fs = require("fs");

const path = "data.json";

var data = {
  data:[]
}

fs.writeFileSync(path,JSON.stringify(data,null,4),"utf8",(e)=>{
  console.log(e)
})


//  fs.readFile(path,"utf8",(e,data)=>{
//   console.log(JSON.parse(data).data);
  
// })

// static
app.use(express.static("public"));

app.get
