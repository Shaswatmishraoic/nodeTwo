const express = require("express")
const dummydata = require("./dummydata")
const port = 3000;
const cors = require("cors")
const arr = []
const app = express();
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get("/Home",(req,res)=>{
    res.send("Hello welcome to prepbyte")
})
app.get("/Api/fetch",(req,res)=>{
    res.send(dummydata)
})


app.listen(port,()=>{
    // console.log("fine")
    try{
        console.log(`port:${port}`);
    }
    catch(err){
        console.log(`error:${err}`)
    }
});