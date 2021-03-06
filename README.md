Integratieproject Webontwikkeling III - Groep 6
==============

Weersvoorspellingen op basis van Geolocation-coördinaten
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


Index.html gebruiksaanwijzing
--------------

De volgende stappen zullen uitleggen hoe u de webpagina Index.html dient te gebruiken.  

Allereerst moet de webpagina geopend worden in een browser naar keuze die Gelocation ondersteunt, anders wordt er een foutboodschap weergegeven en kunt u de weersvoorspellingen voor uw omgeving niet raadplegen.

**Geolocation toestaan**

Bij het openen van Index.html zal er gevraagd worden of u toestaat dat de webpagina uw locatie opvraagt. Dit moet u toestaan om van de site gebruik te kunnen maken.  
De manier waarop dit gevraagd zal worden verschilt van browser tot browser, hieronder vindt u enkele voorbeelden:

- *In Firefox:*

![Firefox location](https://raw.github.com/mifieli/Groep6WOIII/master/img/firefoxLocation.PNG)

- *In Internet Explorer:*
![IE location 1](https://raw.github.com/mifieli/Groep6WOIII/master/img/ieLocation1.PNG)
![IE location 2](https://raw.github.com/mifieli/Groep6WOIII/master/img/ieLocation2.PNG)

- *In Safari:*

![Safari location](https://raw.github.com/mifieli/Groep6WOIII/master/img/safariLocation.PNG)

**Bekijken van weersvoorspellingen**

Nadat u Geolocation heeft toegestaan is er een aanvraag verstuurd naar de API van Open Weather Map. Afhankelijk van het webverkeer op hun servers kan een antwoord snel verkregen worden of kan dit iets langer duren.  
Een antwoord wordt teruggestuurd in JSON-formaat, deze wordt door het JavaScript-script omgezet in de begrijpbare data die u zal zien verschijnen van zodra deze verkregen en verwerkt is.

Eenmaal de data verwerkt is kunt u de weersvoorspellingen bekijken. U vindt informatie terug over welk tijdstip precies dat de weersvoorspelling gaat, welk weer er verwacht wordt met een bijpassend icoontje, en welke temperaturen er verwacht kunnen worden. 
Dit wordt initieel enkel over de dag zelf van de aanvraag weergegeven, u kunt ook de weersvoorspellingen voor de volgende dag bekijken door op de knop te drukken die op onderstaande afbeelding blauw opgelicht staat:

![Webpagina voorbeeld](https://raw.github.com/mifieli/Groep6WOIII/master/img/resultExample.PNG)

U kunt de weersvoorspellingen voor de volgende dag ook weer verbergen door opnieuw op deelfde knop te drukken, die dan de tekst "Weersvoorspellingen voor morgen verbergen" zal dragen.




