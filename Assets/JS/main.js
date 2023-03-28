const inputArea = document.getElementById("inputArea");
const forecastCard = document.getElementById("forecastCard");
const baseAPI = "https://api.openweathermap.org/data/2.5/forecast?q=";
const APIKey = "7a798281160d451c0aa48c6fc19673f3&units=metric";
const selectCities = document.getElementById("selectCities");

selectCities.addEventListener('change', test);

function test(){
    fetch(baseAPI+this.value+"&appid="+APIKey)
        .then((response)=> response.json())
        .then((data) => {
            console.log(data);
            let cityName = data.city.name;
            let cityWeather = data.list[0].main.temp; //ADD °C
            let cityWind = data.list[0].wind.speed; //ADD MPH 
            //Create the border for the Weather today
            let todayWeather = document.createElement('div');
            todayWeather.classList.add('todayWeather');
            todayWeather.setAttribute('id','todayWeather');
            inputArea.appendChild(todayWeather);
            //insert the City of the day
            let htmlCityName = document.createElement('h3');
            htmlCityName.classList.add('htmlCityName');
            htmlCityName.textContent = "City: "+cityName;
            todayWeather.appendChild(htmlCityName);
            //insert the Weather today
            let htmlCityWeather = document.createElement('h4');
            htmlCityWeather.classList.add('htmlCityWeather');
            htmlCityWeather.textContent = "Temp: "+cityWeather+"°C";;
            todayWeather.appendChild(htmlCityWeather);
            //insert the wind of today
            let htmlCityWind = document.createElement('h4');
            htmlCityWind.classList.add('htmlCityWind');
            htmlCityWind.textContent = "Wind: "+cityWind+" MPH";
            todayWeather.appendChild(htmlCityWind);
            //Insert Forecast Title
            let forecastTitle = document.createElement('h2');
            forecastTitle.classList.add("forecastTitle");
            forecastTitle.innerHTML = "Forecast For The Week";
            inputArea.appendChild(forecastTitle);
            //Forecast
            for (let i = 1; i < 6; i++){
                let forecastCityWeather = data.list[i*8].main.temp; //ADD °C
                let forecastCityWind = data.list[i*8].wind.speed; //ADD MPH 
                let forecastDate = data.list[i*8].dt_txt;
                let forecastCityHumidity = data.list[i*8].main.humidity;
                //create a section for forecast
                let forecast = document.createElement('div');
                forecast.classList.add('forecast');
                forecast.setAttribute('id','forecast');
                forecastCard.appendChild(forecast);
                //insert Date
                let htmlForecastDate = document.createElement('p')
                htmlForecastDate.classList.add('red')
                htmlForecastDate.textContent = forecastDate;
                forecast.appendChild(htmlForecastDate);
                //insert forecast weather
                let htmlForecastCityWeather = document.createElement('p')
                htmlForecastCityWeather.classList.add('red')
                htmlForecastCityWeather.textContent = "Temp: "+forecastCityWeather+"°C";
                forecast.appendChild(htmlForecastCityWeather);
                //insert forecast Wind
                let htmlForecastCityWind = document.createElement('p')
                htmlForecastCityWind.classList.add('red')
                htmlForecastCityWind.textContent = "Wind: "+forecastCityWind+" MPH";
                forecast.appendChild(htmlForecastCityWind);
                //INsert Forecast Humidity
                let htmlForecastCityHumidity = document.createElement('p')
                htmlForecastCityHumidity.classList.add('red')
                htmlForecastCityHumidity.textContent = "Humidity: "+forecastCityHumidity+"%";
                forecast.appendChild(htmlForecastCityHumidity);
            }

            // console.log(cityWind);

        })
    // console.log(baseAPI+this.value+"&appid="+APIKey);
}

