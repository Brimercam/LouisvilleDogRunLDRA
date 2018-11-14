 /*const welcome = ("Hello and welcome the the LDRA Homepage!");
window.alert (welcome);

/*Currently working on fixing this so #navbar will change color with scrolling

window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
};

*/
function initMap() {
    // The location of Tom Sawyer Park
    let cherokee = {lat: 38.244566, lng: -85.694697};
    let oldLou = {lat: 38.233092, lng: -85.753058};
    // The map, centered at Towm Sawyer Park, Dog Run
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 11, center: oldLou, cherokee});
    // The marker, positioned at Tom Sawyer Dog Run
    let marker = new google.maps.Marker({position: oldLou, cherokee, map: map});
  }
