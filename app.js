// function getWeather(event){
//   {
//     event.preventDefault()
//   }

//   let cityName = document.querySelector("#cityName").value

// // // Make a request for a user with a given ID

// let apiKey = "1154cef6760374ad84923c239a3e6cf3";

// axios.get(`https://api.openweathermap.org/data/2.5/weather?lq=${cityName}&appid=${apiKey}`)
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//     document.querySelector("#result").innerHTML = `Weather Data is succesful`
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//     document.querySelector("#result").innerHTML = `Weather Error`
//   })


// // }
// }

function getWeather(event) {
  event.preventDefault(); // Prevent the default form submission

  let cityName = document.querySelector("#cityName").value; // Use the correct selector
  let newTime = new Date()
  let apiKey = "1154cef6760374ad84923c239a3e6cf3";

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    .then(function (response) {
      // handle success
      console.log(response.data);
      document.querySelector("#city").innerHTML = ` ${response.data.name} `;
      document.querySelector("#result").innerHTML = ` ${response.data.main.temp}°C`;
      document.querySelector("#smoke").innerHTML = `Smoke/Feels Like : ${response.data.main.feels_like} °C`;
      document.querySelector("#humidity").innerHTML = `Humidity ${response.data.main.humidity} °C`;
      document.querySelector("#time").innerHTML = ` ${newTime.toDateString()}`


    })


    .catch(function (error) {
      // handle error
      console.log(error);
      document.querySelector("#result").innerHTML = `Weather Error`;
    });
}
