const request = require('request')

const forecast = (address, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=90d31cebab42ade037f7590110d0ac2a&query=" + address
    request({url, json: true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error)
            callback('Unable to fetch weather conditions')
        else{
            callback(undefined,  body.current.temperature)
        }
    })
}


module.exports = forecast