const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000

//Setting up views path
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../template/views')
const partialsPath = path.join(__dirname, '../template/partials')

//Setting up handlebars and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setting up static location
app.use(express.static(publicPath))

app.get('',(req, res) => {
    res.render('index',{
        title: "Weather App",
        name: "Jofosuware"
    })
})

app.get('/about',(req, res) => {
    res.render('about',{
        title: "Weather Robot",
        name: "Jofosuware"
    })
})

app.get('/help',(req, res) => {
    res.render('help', {
        title: "Weather Help",
        message: "Do you need any help, pour your questions here.",
        name: "Jofosuware"
    })
})
app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: "You must provide an address"
        })
    }
    forecast(req.query.address, (error, data) => {

        if(error){
            res.send({
                error: "Enter correct address"
            })
        }else{
            res.send({
                Temperature: data,
                Location: req.query.address
    
            })
        }
        
        }
    )
})



app.get('/help/*', (req, res) => {
    res.render('404', {
        title: "404",
        _404Msg: "Help article not found",
        name: "Jofosuware"
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: "404",
        _404Msg: "Page not found",
        name: "Jofosuware"
    })
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})