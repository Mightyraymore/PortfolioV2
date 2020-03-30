$.getJSON(
  'http://api.openweathermap.org/data/2.5/weather?q=Blaine,Minnesota&units=imperial&appid=df1aa4822bf3bb109b6505f9c4adb6cd',
  function(data) {
    console.log(data);

    var icon = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;

    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $('.temp').append(temp);
  },
);
