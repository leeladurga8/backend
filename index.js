const express = require('express')
 const app = express();
 const bodyparser = require('body-parser');
 app.use(bodyparser.json());
 const users =[
   
   {
     "id":1,
    "emailId":"leela1@mail.com",
    "location":"Hyderabad"
   },
   {
    "id":2,
    "emailId":"leeladurga2@gmail.com",
    "location":"london"
   },
   {
    "id":3,
    "emailId":"leela3@gmail.com",
    "location":"europe"
   } 
]
app.get('/',(req,res)=>{
    res.send("welcome to our webdevelopment");
})
app.get('/users',(req,res)=>{
    res.send(JSON.stringify(users));
})
app.get('/users/:id',(req,res)=>{
    console.log(req.params);
    const user = users.find(item=>item.id===parseInt(req.params.id));
    console.log(user);
    if(user){
        res.status(200).send(JSON.stringify(user));
    }
    else{
        res.status(404).send("notfound");
    }
})
app.post('/users',(req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.status(200).send("user has been added successfully");
})
app.put('/users/:id',(req,res)=>{
    console.log(req.params);
    console.log(req.body);
    res.status(200).send("updated successfully");
    
})
app.put('/users/:id',(req,res)=>{
    console.log(req.params);
    const user =users.find(item=>item.id===Number(req.params.id));
    if(user){
        user.id = req.body.id;
        user.emailId=req.body.email.Id;
        user.location=req.body.location;
        res.status(200).send("existing user||updated successfully");
    }
    else{
        users.push(req._construct.body);
        res.status(200).send("put-created Newuser");
    }
})
app.patch('/users/:id',(req,res)=>{
    console.log(req.params);
    console.log(req.body);
    const user =users.find(item=>item.id===Number(req.params.id));
    if(user){
        user.id = req.body.id;
        user.emailId=req.body.email.Id;
        user.location=req.body.location;
        res.status(200).send("existing user||updated successfully");
    }
    else{
        users.push(req._construct.body);
        res.status(200).send("put-created Newuser");
    }
})
 app.delete('/users/:id',(req,res)=>{
console.log(req.params);
console.log(req.body);
const user =users.find(item=>item.id===Number(req.params.id));
if(user){
    user.id = req.body.id;
    user.emailId=req.body.email.Id;
    user.location=req.body.location;
    res.status(200).send("deleting user||updated successfully");
}
else{
    users.splice(req.body);
    res.status(200).send("deleted user");
}
})


app.listen(5500,()=>{
    console.log("server is up and running at http://localhost:5500 ");
})