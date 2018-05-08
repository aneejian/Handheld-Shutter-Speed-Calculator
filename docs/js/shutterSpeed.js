// function CalculateShutterSpeed() {
//   var hForm = document.forms['handHeldForm'];
//   var fLength = hForm.elements['fLength'].value;
//   var cropFactor = hForm.elements['cropFactor'].value;
//   var fStops = hForm.elements['fStops'].value;
//   var effectivefLength = fLength * cropFactor;
//   hForm.elements['efLength'].value = Math.round(effectivefLength);
//   var stabilization = Math.pow(2, fStops);
//   var denominator = (effectivefLength / stabilization);
//   var insecs = stabilization / effectivefLength;
//   var recShutterSpeed = "0";
//   if (denominator >= 2) {
//     recShutterSpeed = "1/" + Math.round(denominator);
//   } else {
//     recShutterSpeed = Math.round(insecs);
//   }
//   document.getElementById('shutterSpeed').innerHTML = recShutterSpeed + " sec";
// }

document.addEventListener("DOMContentLoaded", function() {
  CalculateShutterSpeed();
});

$(window).ready(CalculateShutterSpeed());

$('#shutterForm').change(
  function(){
    CalculateShutterSpeed();
  }
);

function CalculateShutterSpeed() {
  console.log('was here');
  var f = $('#focalLength').val();
  var c = $('#cropFactor').val();
  var s = $('#stabilization').val();
  var ee = $('#effectiveFocalLength');
  var rse = $('#shutterspeed');
  var effectiveFocalLength = f * c;
  ee.val(effectiveFocalLength);
}
