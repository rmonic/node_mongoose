const express = require("express");
const app = express();
const path = require("path");
//const Character= require("./models/Character");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use("/js", express.static(path.join(__dirname, "./js")));
app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/", require("./routes/routes"));

const port=process.env.PORT || 3000;
app.listen(port,()=>{
console.log("Apka działa na porcie "+port);

 })


// const connectionString='mongodb+srv://szkoleniebielsko:szkoleniebielsko@cluster0.xgn6c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//async function run(){
//     await mongoose.connect(connectionString,{
//         useNewUrlParser: true,
//         useUnifiedTopology:true,
        

//     }).then(()=>{
//         console.log("Połączenie udane");
//     },
//     error=>{
//         console.log("Błąd: "+ error)
//     })

//     if (Character.length){
//         await Character.collection.drop();
//     }
//     await Character.create([
//         {name:"Macin", age:33, rank:"szeregowy"},
//         {name:"Tomasz", age:38, rank:"pułkownik"},
//         {name:"Agnieszka", age:29, rank:"marszałek"},
//         {name:"Adam", age:44, rank:"szeregowy"},
//         {name:"Tadeusz", age:32, rank:"generał"},
//         {name:"Anna", age:31, rank:"podporucznik"},
//         {name:"Klaudia", age:23, rank:"porucznik"},
//         {name:"Magda", age:48, rank:"generał"},
//         {name:"Agnieszka", age:39, rank:"porucznik"}
//     ])

// //const docs=await Character.find({name: "Agnieszka"});
// //console.log(docs);
// // const findId=await Character.find();
// // const doc01=await Character.findByIdAndUpdate({_id:findId[1]._id},{rank:"szeregowy"});

// // const doc02 =await Character.findOneAndUpdate({name:"Tomasz"},{rank:"kapral"});

// // const doc03 =await Character.updateMany({age:33},{rank:"generał"});
// // const doc04 =await Character.updateMany({age:{$lt: 33}},{rank:"szeregowy"});  //$lt ->lower (mnniej niż) lib $gt ->(greater więcej niż)
// // const doc05 =await Character.updateMany({},{ employment:true});  
// // //add document to collection
// // const insertDoc=new Character({name:"Jan", rank: "porucznik"});
// // const insert=await insertDoc.save((err, someVal)=>{
// //     if (err) {return console.error(err)};
// //     console.log(someVal.name + " został dodany")
// // })

// const doc06=Character.find({});
// console.log(doc06);

// const findId2=await Character.find();
// const doc07=await Character.deleteOne({_id:findId2[0]._id})
// const doc08=await Character.deleteMany({name:"Agnieszka"})

// const findId3=await Character.find();
// const doc09=await Character.findByIdAndRemove(findId3[2]._id);
// }

// run().catch(error=>console.log(error.stack));
// const port=process.env.PORT || 3000;
// app.listen(port,()=>{
//     console.log("Apka działa na porcie "+port);

 //})
//  run().catch(error=>console.log(error.stack));
