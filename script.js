var city;
var city1 = "Surat,India";
var city2;

const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const search = document.getElementById("city0");
const form = document.getElementById("form_0");
const canvas = document.getElementById("0");



//city 0
console.log(city);

function getWeatherByLocation(city) {
    $.getJSON(url + city + "&APPID=33ec35f7a6943b73d3079925d30b9752",
        function(data) {
            console.log(data);

            const icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            const temp = Math.floor(parseInt(data.main.temp) - 273);
            const des = data.weather[0].description;
            const city = data.name;
            
            const weather = document.createElement("div");
            weather.classList.add("weather");

            weather.innerHTML = `
                <h2>${city}</h2>
                <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" />
                <h3>${des}</h3>
                <h3>${temp}°C</h3>
            `;
            canvas.innerHTML = "";
            canvas.appendChild(weather);

        }
    );
}

//getWeatherByLocation(city);
//First Block eventlistner
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const loc = search.value;
    if (loc) {
        getWeatherByLocation(loc);
    }

});

//second block Eventlsinter


$(document).ready(function() {
    $("#hide").click(function() {
        $("#0").slideUp(1000);
    });

    $("#show").click(function() {
        $("#0").slideDown(1000);
    });
});

function clearData() {}


//city 1----------------------------------------------------------------------------------------------------------
function getWeatherByLocation_1(city1) {
    $.getJSON(url + city1 + "&APPID=33ec35f7a6943b73d3079925d30b9752",
        function(data) {
            console.log(data);

            var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            var temp = Math.floor(parseInt(data.main.temp) - 273);
            var des = data.weather[0].description;
            var city = data.name;
            $(".city1").append(city);
            $(".icon1").attr('src', icon);
            $(".description1").append(des);
            $(".temp1").append(temp + "°C");

        });
}
getWeatherByLocation_1(city1);


$(document).ready(function() {
    $("#hide1").click(function() {
        $("#nd").slideUp(1000);
    });

    $("#show1").click(function() {
        $("#nd").slideDown(1000);
    });
});

function clearData1() {
    nd.innerHTML = "";
    return true;
}
//-------------------------------------------------------------------------------------------------------------
const form_3 = document.getElementById("form_3");
const sera = document.getElementById("city2");
const canvas_3 = document.getElementById("2_nd");

function getWeatherByLocation_3(city2) {
    $.getJSON(url + city2 + "&APPID=33ec35f7a6943b73d3079925d30b9752",
        function(data) {
            console.log(data);

            const icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            const temp = Math.floor(parseInt(data.main.temp) - 273);
            const des = data.weather[0].description;
            const city = data.name;
            
            const weather = document.createElement("div");
            weather.classList.add("weather");

            weather.innerHTML = `
                <h2>${city}</h2>
                <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" />
                <h3>${des}</h3>
                <h3>${temp}°C</h3>
            `;
            canvas_3.innerHTML = "";
            canvas_3.appendChild(weather);

        }
    );
}

form_3.addEventListener("submit",(s) => {
    s.preventDefault();
    const search=sera.value;
    if(search){
        getWeatherByLocation_3(search);
    }
});

$().ready(function() {
    $("#hide2").click(function() {
        $("#2_nd").slideUp(1000);
    });

    $("#show2").click(function() {
        $("#2_nd").slideDown(1000);
    });
});