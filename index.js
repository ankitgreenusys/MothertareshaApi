import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import nodeCCAvenue from 'node-ccavenue';
import ccaRouter from "./router/ccarouter.js"

const app = express();
dotenv.config();


const ccav = new nodeCCAvenue.Configure({
  merchant_id: process.env.merchant_id,
  working_key: process.env.Working_key
});

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.MONGODB_URI || "";

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());



app.use("/new", ccaRouter);

app.use("/",async(req,res)=>{
    return res.send("/working")
})

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err));