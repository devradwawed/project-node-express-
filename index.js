const express = require("express");
const fs =require("fs");
const app = express();
app.use(express.json())
// 
app.get("/",(req,res)=>{
  const users = JSON.parse(fs.readFileSync("data.json"))
  console.log(users)
  res.send();
})
// createUser
app.post("/createUser" , (req, res) =>{
  const{body} =req;
  const users = JSON.parse(fs.readFileSync("data.json"));
  users.push(body);
  fs.writeFileSync("data.json" , JSON.stringify(users))
  console.log(users)
  res.send("users");
})
// updataUser
app.put("/updataUser" , (req,res) =>{
  const {body} = req;
  const users = JSON.parse(fs.readFileSync("data.json"));
  const newUser = users.map(user =>{
    if( user.id == body.id){
      user = body;
    }
    return user;
  })
  fs.writeFileSync("data.json" ,JSON.stringify(newUser))
  res.send(newUser);
})


//38=>p3
app.delete("/delete" , (req,res)=>{
  const {body} = req;
  const users = JSON.parse(fs.readFileSync("data.json"));
  const newUser = users.filter(user => user.id != body.id)
  fs.writeFileSync("data.json" ,JSON.stringify(newUser))
  res.send(newUser);
})

app.listen(3000, () =>{
  console.log("Server listen 300")
}) 