$(function () {
    $('#getWeather').click(function () {
        $('#show').empty();
        var city = $('input[name="city"]').val();
        var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=7c71df45ef574b6ae3f2c00720f00be5"
        console.log(weatherAPI);

        $.get(weatherAPI, function (data) {
            var cityName = data.name;
            var temp = data.main.temp;
            var pressure = data.main.pressure;
            var humidity = data.main.humidity;
            var description = data.weather[0].description;
            var icon = data.weather[0].icon;
            var country = data.sys.country.toLowerCase();
            

            console.log(data, cityName, description);
            $('#show').append('<br>' +
                '<div class="card" >' +
                    '<div class="card-block" >' +
                        '<h4 class="card-title">' + 'Check Weather by City' + '</h4>' +
                        '<hr style = "border-color: black">' +
                    '</div>' +
                    '<div class="row">'+ 
                        '<div class="col-md-6" align="right">'+
                            '<h4 class="country">'+ data.sys.country + '</h4>' +
                        '</div>'+
                        '<div class="col-md-6" align="left">'+
                            '<img src="http://openweathermap.org/images/flags/'+country+'.png"'+'height="20" width="25"'+
                        '</div>'+
                    '</div>'+ 
                    '<br>' +'<br>' +'<br>' +
                    '<div class="row col-lg-12" >'+
                        '<div class="col-md-3">'+
                        '<img src="img/maps-and-flags.png" style="width:40px;height:40px;">'+
                            '<p class="city">' + cityName + '</p>' +
                        '</div>'+
                        '<div class="col-md-3">'+
                        '<img src="img/004-thermometer.png" style="width:40px;height:40px;">'+
                            '<p>' + (temp - 273.15).toFixed(2) + ' &#176;C</p>' +
                        '</div>'+
                        '<div class="col-md-3">'+ 
                        '<img src="img/002-drop-1.png" style="width:40px;height:40px;">'+
                            '<p>' + humidity + ' % </p>' +
                        '</div>'+
                        '<div class="col-md-3">'+
                        '<img src="img/001-weather.png" style="width:40px;height:40px;">'+
                            '<p>' + pressure + ' hpa </p>' +                
                        '</div>'+
                    '</div>'+
                    '<div class="col-md-12">'+
                        '<h4>' + description + '<img src="http://openweathermap.org/img/w/' + icon + '.png"' + '</h4>' +
                    '</div>'+
                '</div>'+
                '</div>'

            );

        });
    });
});
