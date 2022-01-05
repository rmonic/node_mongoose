const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Character= require("./models/Character");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const connectionString='mongodb+srv://szkoleniebielsko:szkoleniebielsko@cluster0.xgn6c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

async function run(){
    await mongoose.connect(connectionString,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
        

    }).then(()=>{
        console.log("Połączenie udane");
    },
    error=>{
        console.log("Błąd: "+ error)
    })

    await Character.create([
        {name:"Macin", age:33, rank:"szeregowy"},
        {name:"Tomasz", age:38, rank:"pułkownik"},
        {name:"Agnieszka", age:29, rank:"marszałek"}
    ])
}

run().catch(error=>console.log(error.stack));
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Apka działa na porcie "+port);

})