$(function(){
    $('#getWeather').click(function(){
        $('#show').empty();
       var city = $('input[name="city"]').val();
       var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=7c71df45ef574b6ae3f2c00720f00be5"
        console.log( weatherAPI );
        
        $.get(weatherAPI, function(data){
            var cityName = data.name;
            var temp = data.main.temp;
            var pressure = data.main.pressure;
            var humidity = data.main.humidity;
            var description = data.weather[0].description;
            var icon = data.weather[0].icon;

            console.log( data , cityName ,description );
            $('#show').append(
                '<div class="card_show">'+
                    '<div class="row">'+
                        '<p class="name">'+ data.sys.country +'&#160;&#160;&#160;&#160;&#160;&#160;&#160;'+ cityName +'</p>'+
                        '<p class="name">'+ cityName +'</p>'+
                        '<p>'+ temp +' c</p>'+
                        '<p>'+ humidity +' % </p>'+
                        '<p>'+ pressure +' hpa </p>'+
                        '<p>'+ icon +' </p>'+
                        '<p>'+ description + '<img src="http://openweathermap.org/img/w/'+ icon +'.png"'+'</p>'+
                    '</div>'+
                '</div>'
            );

        });
    });
});
