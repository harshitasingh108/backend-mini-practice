const mongoose = require('mongoose');
const Chat=require("./models/chat.js");

main()
.then((res)=>{
    console.log("gud");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatup');}
   let allChat =[
    {
    from:"aman",
    to:"harshi",
    message:"give me a assignment",
    created_at:new Date(),
},
{
    from:"radharani",
    to:"krishn",
    message:"nainn me sham shmaigo ",
    created_at:new Date(),
},
{
    from:"krishn",
    to:"radhe",
    message:"mohe tumshe prit lgi h radhe",
    created_at:new Date(),
},
{
    from:"shiva",
    to:"ram",
    message:"rama rama ratte ratte biti re umariya",
    created_at:new Date(),
},
{
    from:"shkti",
    to:"shiv",
    message:"shamshdashiv",
    created_at:new Date(),
},

   ];

   Chat.insertMany(allChat);
// chat1.save()    console.log(res);.then((res)=>{

// })
