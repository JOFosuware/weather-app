const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
let message1 = document.querySelector('#message-1')
let message2 = document.querySelector('#message-2')
let message3 = document.querySelector('#message-3')
let message4 = document.querySelector('#message-4')
let message5 = document.querySelector('#message-5')
let message6 = document.querySelector('#message-6')
let message7 = document.querySelector('#message-7')
let message8 = document.querySelector('#message-8')
let message9 = document.querySelector('#message-9')
let message10 = document.querySelector('#message-10')
let message11 = document.querySelector('#message-11')
let message12 = document.querySelector('#message-12')
let message13 = document.querySelector('#message-13')

message1.textContent = ''
message2.textContent = ''
message3.textContent = ''
message4.textContent = ''
message5.textContent = ''
message6.textContent = ''
message7.textContent = ''
message8.textContent = ''
message9.textContent = ''
message10.textContent = ''
message11.textContent = ''
message12.textContent = ''
message13.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    message1.textContent = 'Loading...'
    message2.textContent = ''
    message3.textContent = ''
    message4.textContent = ''
    message5.textContent = ''
    message6.textContent = ''
    message7.textContent = ''
    message8.textContent = ''
    message9.textContent = ''
    message10.textContent = ''
    message11.textContent = ''
    message12.textContent = ''
    message13.textContent = ''
    
    fetch('/weather?address=' + location).then((response) =>{
    response.json().then((data) => {
        if(data.error){
            message1.textContent = data.error
        }else{
            message1.textContent = data.location
            message2.textContent = 'City: ' + data.city
            message3.textContent = 'Region: ' + data.region
            message4.textContent = 'Country: ' + data.country
            message5.textContent = data.conditions
            message6.textContent = 'Observation time: ' + data.time
            message7.textContent = 'Weather description: ' + data.weatherDes
            message8.textContent = 'Temperature: ' + data.temperature
            message9.textContent = 'Wind speed: ' + data.windSpeed
            message10.textContent = 'Pressure: ' + data.pressure
            message11.textContent = 'Humidity: ' + data.humidity
            message12.textContent = 'Visibility: ' + data.visibility
            message13.textContent = "Is day: " + data.is_day

        }
    })

    
})
})