const express=require("express");
const { dirname } = require("path");
const bodyParser = require("body-parser");
const request = require("request");
const path=require("path");
const app = express();
const fs=require("fs");
const { Console } = require("console");
const port=80;

// Configure dotenv package
require("dotenv").config();

// Set up your OpenWeatherMap API_KEY

const apiKey = `${process.env.API_KEY}`;
app.use(bodyParser.urlencoded({ extended: true }));


//Express related stuff
app.use('/static', express.static('static')) // for serving static files
app.use(express.urlencoded())

//PUG related stuff
app.set('view engine','pug')//set the template engine as pug
app.set('views', path.join(__dirname,'views'))  //set the view directory //some uses template


app.get('/' ,(req,res)=>{

    // let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=Agra&units=metric&appid=${apiKey}`
    request(url, function(err, response, body) {

        // On return, check the json data fetched
        if (err) {
            res.render('home.pug', { weather: null, error: 'Error, please try again' });
        } else {
            let weather = JSON.parse(body);
            if (weather.main == undefined) {
            res.render('home.pug', { weather: null, error: 'Error, please try again' });
           } else {
            console.log(weather);
//             weatherFahrenheit;
//             weatherFahrenheit = (weatherTemp * 9) / 5 + 32;

//   // you shall also round off the value of the degrees fahrenheit calculated into two decimal places
//   function roundToTwo(num) {
//     return +(Math.round(num + "e+2") + "e-2");
//   }
//   weatherFahrenheit = roundToTwo(weatherFahrenheit);
}
res.render("home.pug",{
    weatherTemp: `${weather.main.temp}`,
    temp_min: `${weather.main.temp_min}`,
    temp_max: `${weather.main.temp_max}`,
    place : `${weather.name}, ${weather.sys.country}`,
    // weatherPressure: `${weather.main.pressure}`,
    // weatherDescription: `${weather.weather[0].description}`,
    // humidity: `${weather.main.humidity}`,
    // clouds:`${weather.clouds.all}`,
    // visibility: `${weather.visibility}`,
    // main: `${weather.weather[0].main}`,
  });
}
})  
})

app.listen(port,()=>{
    console.log(`application running on ${port}`);
})