class Weather {
    constructor(location) {
        this.location = location;
    }

    get loadweather() {
        return this.fweather(this.hweather);
    }

    hweather(result) {
        var code = result.weather[0].id;

        var date = new Date();
        var sunrise = new Date(result.sys.sunrise * 1000); //Convert a Unix timestamp to time
        var sunset = new Date(result.sys.sunset * 1000);

        /* Get suitable icon for weather */
        if (date.getHours() >= sunrise.getHours() && date.getHours() < sunset.getHours()) {
            var icon = 'wi wi-owm-day-' + code
        } else if (date.getHours() >= sunset.getHours() || date.getHours() < sunrise.getHours()) {
            var icon = 'wi wi-owm-night-' + code
        }

        $.gI('icon').innerHTML = `<i class="${icon}"></i>`;
        $.gI('temp').innerHTML = `<li>${parseInt(result.main.temp, 10)} ºC ${result.weather[0].description}</li>`
    }

    fweather(callback) {
        var request = new XMLHttpRequest(),
            url = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=metric&appid=c4504024dcb408763057f53ae754b1a0`;


        request.open('GET', url, true);

        request.onload = function () {
            if (this.status >= 200 && this.status < 400)
                callback(JSON.parse(this.response));
            else {
                console.log("Weather API returned an error: " + this.response);
                callback(null);
            }
        };

        request.onerror = () => {
            console.log("Request to weather API failed.");
            callback(null);
        };

        request.send();
    }
}