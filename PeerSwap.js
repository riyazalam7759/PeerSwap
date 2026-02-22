import express from 'express'

import path from 'path'

const app = express();
const publicPath=path.resolve('public')
app.use(express.static(publicPath))

app.set("view engine" ,'ejs')

app.get("/",(req , resp)=>{
    resp.render("loginpage")
})

app.get("/home",(req , resp)=>{
    resp.render("home")
})

app.get("/user",(req , resp)=>{
    resp.render("userprofile")
})

app.get("/setting",(req , resp)=>{
    resp.render("setting")
})

app.get("/myprofile",(req , resp)=>{
    resp.render("myProfile")
})

app.get("/signup",(req , resp)=>{
    resp.render("signup")
})

app.get("/skills",(req , resp)=>{
    resp.render("skills")
})

app.post("/login",(req , resp)=>{
    resp.redirect("/home")
})




app.post("/signup",(req , resp)=>{
    resp.redirect("/skills")
})



app.listen(3800)