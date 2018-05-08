$(document).ready(function()
{
if(navigator.geolocation)

navigator.geolocation.getCurrentPosition(success);

	else
		$("p").html("html5 not suppported");

});


function success(position)
{

var googleLatLang = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

var mapOtn ={ 
zoom : 10,
center : googleLatLang,
mapTypeId : google.maps.MapTypeId.ROAD
}

var Pmap = document.getElementById("map");

var map = new google.maps.Map(Pmap,mapOtn);

}