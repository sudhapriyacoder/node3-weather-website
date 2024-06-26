const path = require("path");
const express = require("express");
const hbs = require("hbs");
const { title } = require("process");
const geocode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

const app = express();
const port = process.env.PORT || 3000;

// Define path for express config
const publicDirectoryPath = path.join(__dirname, '../public'); 
const viewsPath = path.join(__dirname, '../templates/views'); 
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine','hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req,res) => {
    res.render('index', {title: 'Weather App', name: 'Sudha Priya'});
})
app.get('/about', (req,res) => {
    res.render('about', {title: 'About App', name: 'Sudha Priya'});
})

app.get('/help', (req,res) => {
    res.render('help', {helpText: 'This is some helpful text', title: 'Help', name: 'Sudha Priya'});
})

app.get('/weather', (req,res) => {
    if(!req.query.address) {
        return res.send({error: "Please enter address"});
    }
    geocode(req.query.address, (error, {latitude, longitude, location}={}) => {
        console.log()
        if(error) {
            return res.send({error})
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
});

app.get('/help/*', (req, res) => {
   res.render('404', {
    title: '404',
    name: 'Sudha Priya',
    errorMessage: 'Help article not found'
   })
});

app.get('/products', (req, res) => {
    console.log(req.query);
    if(!req.query.name) {
        return res.send("Please enter name");
    }
    res.send({
        products: []
    })
})

app.get('*', (req, res) => {
   res.render('404', {
    title:'404',
    name: 'Sudha Priya',
    errorMessage: 'Page not found'
   });
});

app.listen(port, () => {
    console.log("Server is up on port " + port);
});