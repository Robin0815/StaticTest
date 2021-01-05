//Aus der VL Informationsmanagement 2018

window.onload = pruefeStandort;

function pruefeStandort()
{
	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(zeigeStandort);
	} else
	{
		alert("Keine Geolacation-Unterst�tzung");
	}
}

function zeigeStandort(position)
{
	var breite = position.coords.latitude;
	var laenge = position.coords.longitude;
	
	var div = document.getElementById("standort");
	
	div.innerHTML="Ihr Breitengrad: " + breite + ", Ihr L&auml;ngengrad: "+laenge;
	
	zeigeKarte(position.coords);
}

var karte=null;

function zeigeKarte(coords) {
	var googleBreiteLaenge = new google.maps.LatLng(coords.latitude, 
												  coords.longitude);
	var kartenOptionen = {
		zoom: 10,
		center: googleBreiteLaenge,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var kartenDiv = document.getElementById("karte");
	karte = new google.maps.Map(kartenDiv, kartenOptionen);
}