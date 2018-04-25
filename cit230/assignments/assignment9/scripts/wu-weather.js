var main = document.querySelector('main');
var article = document.createElement('article');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var weather = request.response;
    weatherInfo(weather);
}

function weatherInfo(jsonObj) {
    var townArray = jsonObj["towns"];
    for (var i = 0; i < townArray.length; i++) {
        if (townArray[I].name != "Placerton") {
            var div = document.createElement("div");
            var h1 = document.createElement("h1");
            var p1 = document.createElement("p");
            var p2 = document.createElement("p");
            var p3 = document.createElement("p");
            var p4 = document.createElement("p");

            h1.textContent = townArray[i].name;
            p1.textContent = townArray[i].motto;
            p2.textContent = townArray[i].yearFounded;
            p3.textContent = townArray[i].currentPopulation;
            p4.textContent = townArray[i].averageRainfall;

            div.appendChild(h1);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            div.appendChild(p4);
            article.appendChild(div);
        }
    }
    main.appendChild(article);
}


var weatherObject = new XMLHttpRequest();

weatherObject.open("Get", "http://api.wunderground.com/api/efa54af4c525fe23/conditions/MN/Franklin.json", true);

weatherObject.onload = function () {
        var weatherInfo = JSON.parse(weatherObject.responseText);

        document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
        document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;

        document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
