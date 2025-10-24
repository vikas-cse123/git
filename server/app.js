import express from "express"
const app = express()
const port  = 20264
app.get("/",() =>{
    console.log(`Hello`);
})
app.listen(port,() =>{
    console.log(`Server started`);
})
console.log("1111111111111111111");
console.log("2222222222222222222222");