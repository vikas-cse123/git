import express from "express"
const app = express()
const port  = 20264
app.get("/",() =>{
    console.log(`Hello`);
})
app.listen(port,() =>{
    console.log(`Server started`);
})