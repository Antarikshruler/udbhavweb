// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'Bangalore',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li><span class="blue">'+weather.city+', '+weather.region+'</span></li>';
      html += '<li class="currently"><span class="black">'+weather.currently+'</span></li>';
      html += '<li><span class="red">'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</span></li></ul>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
