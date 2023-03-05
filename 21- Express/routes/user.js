const express=require("express");
const users=require("../userList");

const userRouter=express.Router();
//get user
userRouter.get("/", (req,res)=>
{
    const date =new  Date();
    const hours=date.getHours();
    if (hours>8 && hours<18){
        res.render("isopened");
    } 
    else{
        res.render("isclosed");
    }
});
//post user
userRouter.post("/login", (req,res)=>
{
    let email=req.body.email;
    let passowrd=req.body.passowrd;
    res.send({msg:`your email is ${email} and your passowrd is ${passowrd}`});
});
//delete user
//update user

module.exports=userRouter;