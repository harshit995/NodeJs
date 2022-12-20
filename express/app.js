const express=require("express");
const { dirname } = require("path");
const path=require("path");
const app = express();
const fs=require("fs")
const port=80;

//Express related stuff
app.use('/static', express.static('static')) // for serving static files
app.use(express.urlencoded())

//PUG related stuff
app.set('view engine','pug')//set the template engine as pug
app.set('views', path.join(__dirname,'views'))  //set the view directory //some uses template

//our pug demo endpoint
// app.get("/demo", (req, res) => {
//     res.status(200).render('demo', { title: 'Hey Harshit', message: 'Hello there thanks to teach me pug!' })
//   });

// app.get("/" ,(req,res)=>{
//     res.send("This is my first express app")
// })

// app.get("/about" ,(req,res)=>{
//     res.send("This is my about page app")
// })

// app.post("/about" ,(req,res)=>{
//     res.send("This is my about page app of post request")
// })

// app.post("/this" ,(req,res)=>{
//     res.status(404).send("This is 404 Page")
// })


//Endpoints
app.get('/' ,(req,res)=>{
    const con="This is best content";
    const params ={'title': "Pubg is best",'content' : con}
    res.status(200).render('index.pug',params)
})

app.post('/',(req,res)=>{
    name = req.body.name;
    age=req.body.age;
    gender=req.body.gender;
    address=req.body.address;
    more=req.body.more;

    let outputToWrite = `The name of the client is ${name} , ${age} years old ,${gender} , residing at ${address}, more about him/her is ${more} `
    fs.writeFileSync('output.txt',outputToWrite)
    const params={'message':"Your form has been submitted successfully",}
    res.status(200).render('index.pug',params);
})

app.listen(port,()=>{
    console.log(`application started on port ${port}`)
})

