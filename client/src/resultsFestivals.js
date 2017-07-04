var ResultsFestivals = function() {
  var FestivalsList = require("./festivalsList");
  this.list = new FestivalsList( null );
}

ResultsFestivals.prototype = {

    renderSliderFestivals: function( urlRequest ){
        this.list.url = urlRequest;
        this.list.getData( this.createDetails.bind( this ));
    },

    createDetails: function(){
        var festivalList = document.getElementById('festival-div');

        this.list.festivals.forEach(function( ele ){
            var festival = document.createElement('div');

            var image = document.createElement('img');
            var h3 = document.createElement('h3');
            var country = document.createElement('p');
            var date = document.createElement('p');

            var overlay = document.createElement('div');
            var overlayBody = document.createElement('div');

            var h2 = document.createElement('h3');
            var description = document.createElement('p');
            var countryOverlay = document.createElement('p');
            var dateOverlay = document.createElement('p');


            image.classList.add('festival-image');
            image.src = ele.image;

            h3.classList.add('festival-title');
            h3.innerText = ele.title;

            country.classList.add('festival-country');
            country.innerText = ele.country;  

            date.classList.add('festival-date');
            date.innerText = ele.start;

            overlay.classList.add('overlay');
            overlayBody.classList.add('overlayBody');

            h2.innerText = ele.title;
            description.innerText = ele.description;
            countryOverlay.innerText = ele.country;
            dateOverlay.innerText = ele.start + "-" + ele.end;

            overlayBody.appendChild(h2);
            overlayBody.appendChild(description);
            overlayBody.appendChild(countryOverlay);
            overlayBody.appendChild(dateOverlay);


            festival.classList.add('festival');

            festival.appendChild(image);
            festival.appendChild(h3);
            festival.appendChild(country);
            festival.appendChild(date);

            overlay.appendChild(overlayBody);


            festivalList.appendChild(festival);
            festival.appendChild(overlay);

        }.bind( this ))
    }
}


module.exports = ResultsFestivals;