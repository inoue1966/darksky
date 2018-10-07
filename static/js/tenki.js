const tenki = {
    "clear-day": "static/img/clear-day.png",
    "clear-night": "static/img/clear-day.png",
    "rain": "static/img/rain.png",
    "snow": "static/img/snow.png",
    "sleet": "static/img/sleet.png",
    "wind": "static/img/wind.png",
    "fog": "static/img/fog.png",
    "cloudy": "static/img/cloudy.png",
    "partly-cloudy-day": "static/img/partly-cloudy-day.png",
    "partly-cloudy-night": "static/img/partly-cloudy-day.png",
    "hail": "static/img/hail.png",
    "thunderstorm": "static/img/thunderstorm.png",
    "tornado": "static/img/tornado.png"
};
const youbi = ["日", "月", "火", "水", "木", "金", "土"];


function tenkiload() {
    //小田原
    axios.get("/api?iti=35.2637,139.1502").then(response => {
        let tmp = 0.0;
        let ht = null;


        $("#desc").text(response.data.daily.summary);


        let dat = null;
        for (let i = 0; i < 4; i++) {
            $("#d" + i + "-icon").children('img').attr('src', tenki[response.data.daily.data[i].icon]);
            //skycons.set("#d" + i + "-icon", Skycons.PARTLY_CLOUDY_DAY);
            $("#d" + i + "-desc").text(response.data.daily.data[i].summary);
            $("#d" + i + "-temphigh").text(Math.round(response.data.daily.data[i].temperatureHigh * 10) / 10 + "℃");
            $("#d" + i + "-templow").text(Math.round(response.data.daily.data[i].temperatureLow * 10) / 10 + "℃");
            dat = new Date(response.data.daily.data[i].time * 1000);
            $("#d" + i + "-date").text(`${(dat.getMonth() + 1)}/${dat.getDate()}(${youbi[dat.getDay()]})`);
        }

        let j = 0;
        for (let i = 0; i < 5; i++) {
            ht = new Date(response.data.hourly.data[j].time * 1000);
            $("#h" + i + "-time").text(`${ht.getHours()}:00`);
            $("#h" + i + "-temp").text(Math.round(response.data.hourly.data[j].temperature * 10) / 10 + "℃");
            $("#h" + i + "-sum").text(response.data.hourly.data[j].summary);
            j = j + 3;
        }

    });

    //tokyo chiyoda
    axios.get("/api?iti=35.6828,139.7595").then(response => {
        let tmp = 0.0;
        let ht = null;


        //$("#desc").text(response.data.daily.summary);


        let dat = null;
        for (let i = 0; i < 2; i++) {
            $("#t"+i+"-icon").children('img').attr('src', tenki[response.data.daily.data[i].icon]);
            //skycons.set("#d" + i + "-icon", Skycons.PARTLY_CLOUDY_DAY);
            $("#t"+i+"-desc").text(response.data.daily.data[i].summary);
            $("#t"+i+"-temphigh").text(Math.round(response.data.daily.data[i].temperatureHigh * 10) / 10 + "℃");
            $("#t"+i+"-templow").text(Math.round(response.data.daily.data[i].temperatureLow * 10) / 10 + "℃");
            dat = new Date(response.data.daily.data[i].time * 1000);
            $("#t"+i+"-date").text(`${(dat.getMonth() + 1)}/${dat.getDate()}(${youbi[dat.getDay()]})`);
        }
        let j = 0;
        for (let i = 0; i < 4; i++) {
            ht = new Date(response.data.hourly.data[j].time * 1000);
            $("#th" + i + "-time").text(`${ht.getHours()}:00`);
            $("#th" + i + "-temp").text(Math.round(response.data.hourly.data[j].temperature * 10) / 10 + "℃");
            $("#th" + i + "-sum").text(response.data.hourly.data[j].summary);
            j = j + 4;
        }

    });

    //numazu
    axios.get("/api?iti=35.103,138.8598").then(response => {
        let tmp = 0.0;
        let ht = null;


        //$("#desc").text(response.data.daily.summary);


        let dat = null;
        for (let i = 0; i < 2; i++) {
            $("#n"+i+"-icon").children('img').attr('src', tenki[response.data.daily.data[i].icon]);
            //skycons.set("#d" + i + "-icon", Skycons.PARTLY_CLOUDY_DAY);
            $("#n"+i+"-desc").text(response.data.daily.data[i].summary);
            $("#n"+i+"-temphigh").text(Math.round(response.data.daily.data[i].temperatureHigh * 10) / 10 + "℃");
            $("#n"+i+"-templow").text(Math.round(response.data.daily.data[i].temperatureLow * 10) / 10 + "℃");
            dat = new Date(response.data.daily.data[i].time * 1000);
            $("#n"+i+"-date").text(`${(dat.getMonth() + 1)}/${dat.getDate()}(${youbi[dat.getDay()]})`);
        }
 
        let j = 0;
        for (let i = 0; i < 4; i++) {
            ht = new Date(response.data.hourly.data[j].time * 1000);
            $("#nh" + i + "-time").text(`${ht.getHours()}:00`);
            $("#nh" + i + "-temp").text(Math.round(response.data.hourly.data[j].temperature * 10) / 10 + "℃");
            $("#nh" + i + "-sum").text(response.data.hourly.data[j].summary);
            j = j + 4;
        }

    });
};
