import express from "express";

const app = express();
app.use((req, res, next) => {
    res.send("Hello World");
})
app.listen(3000,(req, res)=>{
    console.log("server is running on port 3000");
})
