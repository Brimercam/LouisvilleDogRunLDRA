 /*const welcome = ("Hello and welcome the the LDRA Homepage!");
window.alert (welcome);*/


//Goolge map API function each variable creates locations and repective info
  function dogRunMap() {

	let tomsawyer = {
		info: '<h1>Tom Sawyer Dog Run</strong></h1>\
                   3000 Freys Hill Rd<br> Louisville, Ky 40241<br>\
					<a href="https://goo.gl/maps/adjeQmSTQxk">Get Directions</a>',
		lat: 38.2828,long: -85.5586
	};

	let oldLou = {
		info: '<h1>Old Louisville Dog Run</strong></h1>\
				     <br> Louisville, Ky 40203<br>\
					<a href="https://goo.gl/maps/EvYgWM3QQ2R2">Get Directions</a>',
		lat: 38.2330,long: -85.7530
	};

	let champions = {
		info: '<h1>Champions Park Dog Run</strong></h1>\r\
                    2050 River Rd,<br> Louisville, ky 40206<br>\
					<a href="https://goo.gl/maps/7DdvQFQ8qcG2">Get Directions</a>',
		lat: 38.2681,long: -85.7135 
    };
    
    let cochran = {
		info: '<h1>Cochran Hill Dog Run</strong></h1>\r\
                  740 Cochran Hill Rd,<br> Louisville, ky 40206<br>\
					<a href="https://goo.gl/maps/7DdvQFQ8qcG2">Get Directions</a>',
		lat: 38.2442,long: -85.6953  
    };
           
    let floyds = {
		info: '<h1>Beckley Creek Pkwy,</h1><br>\r\
                      1411 Beckley Creek Pkwy,,<br> Louisville, ky 40245<br>\
					<a href="https://goo.gl/maps/3ayy6rp3Yh52">Get Directions</a>',
		lat: 38.2082,long: -85.4749   
	};


      //Array to connect each park variables info., lat., and long. into "let parks" 
	let parks = [
      [tomsawyer.info, tomsawyer.lat, tomsawyer.long, 0],
      [oldLou.info, oldLou.lat, oldLou.long, 1],
      [champions.info, champions.lat, champions.long, 2],
      [cochran.info, cochran.lat, cochran.long, 3],
      [floyds.info, floyds.lat, floyds.long, 4],
    ];

	let map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11,
		center: new google.maps.LatLng(38.2527, -85.7585),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	let infowindow = new google.maps.InfoWindow({});

	let marker, i;

	for (i = 0; i < parks.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(parks[i][1], parks[i][2]),
			map: map
        });
        
		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(parks[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}