import express from 'express'
import { MongoClient } from 'mongodb'
import path from 'path'

const app = express();

//for mongodb connection
const dbName ="MiniProjectDB";
const collectionName="loginCollection";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const connection = async()=>{
    const connect = await client.connect();
    return await connect.db(dbName)
}

//middleware
app.use(express.urlencoded({extended:true}))
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

app.post("/skills",(req,resp)=>{
    resp.redirect("/test")
})

app.get("/chatSection",(req,resp)=>{
    resp.render("chatSection")
})

app.post("/login",async (req , resp)=>{
    const db= await connection();
    const collection =db.collection(collectionName);
    const result = await collection.insertOne(req.body);
    if(result)
    resp.redirect("/home")
     else resp.redirect("/login")
})




app.post("/signup",(req , resp)=>{
    resp.redirect("/skills")
})
app.get("/test",(req,resp)=>{
    resp.render("test")
})
app.get("/welcome",(req,resp)=>{
    resp.render("welcome")
})


app.listen(3800)