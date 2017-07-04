var initialize = function(){
  var mapDiv = document.getElementById('main-map');
  var center = { lat: 0, lng: 0 };

  var MapWrapper = require('./mapWrapper');
  var mainMap = new MapWrapper(mapDiv, center, 2);

  var ResultsFestivals = require("./resultsFestivals")
  var results = new ResultsFestivals();

  var types = ["Film", "Music", "Carnival", "Religious/Traditional", "New Year", "Food and Drink", "Featured"];

  mainMap.addAllMarkers();
  results.render();

  var SearchButton = require('./searchButtons.js')
  var buttons = new SearchButton(types);

  buttons.renderAllButtons();

}



window.addEventListener('load', initialize);

