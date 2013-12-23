$(function(){

	var currentDate = new Date(); // datum van die dag op tijdstip van uitvoering
    var DEG = 'C'; 
	var button
    var weatherToday = $('#weathertoday'),
		weatherTomorrow = $('#weathertomorrow'),
        scroller = $('#weather'),
        location = $('p.location');
		title = $('#titel');
	var morgenButton = document.getElementById("morgenTonen");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
    }
    else{
        showError("Error: Uw browser ondersteunt geen Geolocation!");
    }
	morgenButton.value = "Weersvoorspellingen voor morgen tonen";
	console.log(morgenButton.value);
	
	weatherTomorrow.hide();
	$('#morgenTonen').click(function() {
		console.log(morgenButton.value);
		if (morgenButton.value == "Weersvoorspellingen voor morgen tonen"){
		weatherTomorrow.show();
		morgenButton.value = "Weersvoorspellingen voor morgen verbergen";
		}
		else{
		weatherTomorrow.hide();
		morgenButton.value = "Weersvoorspellingen voor morgen tonen";
		}
	});
 

    function locationSuccess(position) {

        try{

            var d = new Date();

                var weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast?lat='+position.coords.latitude+
                                    '&lon='+position.coords.longitude+'&callback=?'

                $.getJSON(weatherAPI, function(response){

                    
                    var weatherReply = JSON.stringify({
                        timestamp:(new Date()).getTime(),   
                        data: response
						
                    });
					
				var weatherObject = weatherReply && JSON.parse(weatherReply);
				var counter = 0;
                
                var offset = d.getTimezoneOffset()*60*1000;
                var city = weatherObject.data.city.name;
                var country = weatherObject.data.city.country;
				console.log(country);
				console.log(weatherObject);
				title.html('Weersvoorspellingen voor: ' + city+', '+country);
				location.html(city+', <b>'+country+'</b>');
                $.each(weatherObject.data.list, function(){
                    
                    var localTime = new Date(this.dt*1000 - offset);
					
					
					if (localTime.getDay()== currentDate.getDay()){
						
						addWeather(
						
                        this.weather[0].icon,
						
                        localTime,  
                        this.weather[0].main + ' </br><b> Min. ' + convertToCelsius(this.main.temp_min) + ' graden ' + DEG +
                                                ' / Max. ' + convertToCelsius(this.main.temp_max) + ' graden ' + DEG+'</b>'
                    );
						
					}
					counter = 0;
					if (localTime.getDay() == currentDate.getDay() + 1){
						
						addWeather(
                        this.weather[0].icon,
                        localTime,
                        this.weather[0].main + ' </br><b> Min. ' + convertToCelsius(this.main.temp_min) + ' graden ' + DEG +
                                                ' / Max. ' + convertToCelsius(this.main.temp_max) + ' graden ' + DEG+'</b>'
                    );
						
						
						
					}
                });

                location.html(city+', <b>'+country+'</b>');

                
		
                });
        }
        catch(e){
            showError("We can't find information about your city!");
            window.console && console.error(e);
        }
    }

    function addWeather(icon, day, condition){
		var weekdagen = new Array("Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag");
		var maanden = new Array("Jan","Feb","Maa","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Dec");
		var dag = weekdagen[day.getDay()];
		var maand = day.getDate() + ' ' + maanden[day.getMonth()];
		var jaar = day.getFullYear();
		var uur = day.getHours() + 'u';
		var datum = dag + ', ' + maand + ' ' + jaar + ' - ' + uur;
		var markup = '<div class="weer">'+
            '<img src="img/' + icon + '.png" />'+
            ' <p class="day">'+ datum +'</p> <p class="cond">'+ condition +
            '</p></div>';
		'<img src="http://openweathermap.org/img/w/' + icon + '.png" />'
		if (day.getDay() == currentDate.getDay()){
		console.log(day + '   en   ' + currentDate);
        weatherToday.append(markup);
		}
		else{
		console.log(day + '   en   ' + currentDate);
		weatherTomorrow.append(markup);
		}
    }

    function locationError(error){
        switch(error.code) {
            case error.TIMEOUT:
                showError("Error: de aanvraag duurde te lang om te verwerken.");
                break;
            case error.POSITION_UNAVAILABLE:
                showError('Error: uw locatie kon niet bepaald worden.');
                break;
            case error.PERMISSION_DENIED:
                showError('Error: u moet geolocatie toestaan om uw weersvoorspelling te laten ophalen.');
                break;
            case error.UNKNOWN_ERROR:
                showError('Error: er is een onbekende fout opgetreden.');
                break;
        }

    }

    function convertToCelsius(kelvin){
		return Math.round((kelvin - 273.15));
    }

    function showError(msg){
        weatherToday.addClass('error').html(msg);
    }

});