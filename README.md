Integratieproject Webontwikkeling III - Groep 6
==============

Index.html gebruiksaanwijzing
--------------

**Geolocation** 

Om van de webpagina gebruik te kunnen maken moet uw browser Geolocation ondersteunen. Indien dit niet het geval is, kunnen uw coördinaten niet worden opgevraagd en kan er geen weersvoorspelling worden weergegeven voor uw omgeving.   
Indien uw browser wel Geolocation ondersteunt, zal er een pop-up verschijnen die vraagt of u uw huidige locatie wilt doorgeven aan de webpagina. Dit moet toegelaten worden, anders kan er ook geen aanvraag worden verstuurd voor een weersvoorspelling met uw coördinaten.

**Weersvoorspellingen aanvragen**

Nadat u heeft toegelaten dat uw geografische locatie mag doorgegeven worden aan de webpagina, zal er een aanvraag verstuurd worden naar Open Weather Map om de weersvoorspellingen te weten te komen voor uw omgeving, aan de hand van de OpenWeatherMap API (aan de hand van uw lengte- en breedtegraadcoördinaten).  
Meer info over Open Weather Map en zijn API vindt u op 
*[http://openweathermap.org/API](http://openweathermap.org/API).*

**Weersvoorspellingen weergeven**

De opgevraagde weersvoorspellingen voor uw omgeving zullen worden weergegeven op de webpagina zodra ze ontvangen worden van de OpenWeatherMap API. Naarmate het webverkeer op de servers van Open Weather Map kan de tijd die hierover verstrijkt variëren.   
Initieel worden enkel de weersvoorspellingen voor de dag zelf weergegeven, maar bij het drukken op de knop "Weersvoorspellingen voor morgen tonen" worden de weersvoorspellingen ook weergegeven. Dit kan u weer verbergen door nogmaals op de knop te drukken waarop dan "Weersvoorspellingen voor morgen verbergen" zal staan.
