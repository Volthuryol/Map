 $(function(){
 var google = "https://maps.googleapis.com/maps/api/geocode/json?address=";
 var google1 = "https://maps.googleapis.com/maps/api/js?"
  $("#submit").click(function address(){
    var input = $("#input").val();
    if(!input) return;

    $.ajax(google + input + "&key=AIzaSyDGPYE8ZkdO4QmSnUPmkuSVVMDwf4L1Luk" ).done(function(data){
     var googleLat = data.results[0].geometry.location.lat;
     var googleLng = data.results[0].geometry.location.lng;
        
    $.ajax(google1 + "key=AIzaSyBfF-JHmziJpIBpMMD_UukOmcrNdOwhu_E").done(function initMap() {
        var map;
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: googleLat, lng: googleLng},
          zoom: 8
        });
  });
  });
});
 });