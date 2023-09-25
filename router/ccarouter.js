import express from "express";
const router = express.Router();

router.post("/donate",(req,res)=>{
    return res.send("working donte")
})

export default router