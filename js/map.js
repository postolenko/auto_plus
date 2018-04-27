if( $("#map").length > 0 ) {

    ymaps.ready(init);

    var myMap,
        myPlacemark,
        leftCoord,
        rigthCoord;

        leftCoord = 55.818822;
        rigthCoord = 37.449318;

    function init(){   
        myMap = new ymaps.Map("map", {
            center: [leftCoord, rigthCoord],
            zoom: 16
        });

        myPlacemark = new ymaps.Placemark([leftCoord, rigthCoord], { 
            hintContent: 'Пластиковые окна в розницу по оптовым ценам', 
            balloonContent: 'Dop City' 
        });

        //  {
        //     iconLayout: 'default#image',
        //     iconImageHref: 'img/map_mark.svg',
        //     iconImageSize: [72, 92],
        //     iconImageOffset: [-38, -85]
        // });

        myMap.behaviors
        .disable(['scrollZoom', 'rightMouseButtonMagnifier']);

        myMap.geoObjects.add(myPlacemark);

        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('rulerControl');
        myMap.controls.remove('zoomControl');
        myMap.behaviors.disable(['scrollZoom']);

    }

}