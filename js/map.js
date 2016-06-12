var display=new google.maps.LatLng(52.128983, -106.663277);

function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(49.592552, 34.547128),
    zoom: 14,
    disableDefaultUI:true,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("map"), mapProp);
  var marker=new google.maps.Marker({
      position: display,
      // icon: 'img/icons/marker.png'
  });

  marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
