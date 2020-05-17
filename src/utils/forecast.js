const request = require('request')

const forecast = (address, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=90d31cebab42ade037f7590110d0ac2a&query=" + address
    request({url, json: true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error)
            callback('Unable to fetch weather conditions', undefined)
        else{
            callback(undefined,  {
                location: "Area Details",
                city: body.location.name,
                region: body.location.region,
                country: body.location.country,
                conditions: "Area Weather Conditions",
                time: body.current.observation_time,
                weatherDes: body.current.weather_descriptions,
                temperature: body.current.temperature,
                windSpeed: body.current.wind_speed,
                pressure: body.current.pressure,
                humidity: body.current.humidity,
                visibility: body.current.visibility,
                is_day: body.current.is_day



            })
        }
    })
}


module.exports = forecast