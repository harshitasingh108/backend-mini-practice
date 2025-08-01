const express = require('express');
const app = express();
const port = 8080;
const path=require("path");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
const Chat=require("./models/chat.js");

app.use(express.urlencoded({extended:true}));

const mongoose = require('mongoose');
app.use(express.static(path.join(__dirname,"public")));

main()
.then((res)=>{
    console.log("gud");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatup');}

app.get('/chat',async (req,res)=>{
    let chats= await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});



app.get('/', (req, res) => {
  res.send('sit is working ');
})

// new routes
app.get("/chats/new",(req,res)=>{
  res.render("new.ejs")
})
app.post("/chat",(req,res)=>{
  let {from,to,msg}=req.body;
  let newchat= new Chat({
    from:from,
    to:to,
    msg:msg,
    created_at:new Date()
  });
  newchat.save()
  .then((res)=>{
    console.log("chat was saved");
  })
  .catch((err)=>{
    console.log(err);
  });
  res.redirect("/chat");
})

app.listen(port, () => {
  console.log(`success ${port}`);
})
