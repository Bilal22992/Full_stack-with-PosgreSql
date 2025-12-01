import express from "express";
import cors from "cors";
import pg from "pg";


const app = express();
app.use(cors());
const db = new pg.Client({
    user:"postgres",
    database:"country",
    password:"root",
    port:5432,
    host:"localhost"


})



//  db.connect();

 let data=[];
  async function runQuery() {
  try {
    await db.connect();

    const result = await db.query("SELECT * FROM capitals");

    data=result.rows;   // <-- Data is available here

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await db.end();
  }
}

runQuery();



 app.get("/",(req,res)=>{
 

    const randomData = Math.floor(Math.random() * data.length);

console.log(randomData);
    res.json(data[randomData]);
})



app.listen(5000,()=>{
    console.log("Server running successfully");
})
