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

document.addEventListener("DOMContentLoaded", function () {
  CalculateShutterSpeed();
});

$(window).ready(CalculateShutterSpeed());

$('#shutterForm').change(
  function () {
    CalculateShutterSpeed();
  }
);

$('#shutterForm').change(
  function () {
    CalculateShutterSpeed();
  }
);

$('#shutterForm').keypress(
  function () {
    CalculateShutterSpeed();
  }
);

$('#shutterForm').keyup(
  function () {
    CalculateShutterSpeed();
  }
);

function CalculateShutterSpeed() {  
  var f = $('#focalLength').val();
  var c = $('#cropFactor').val();
  var s = $('#stabilization').val();
  var ee = $('#effectiveFocalLength');
  var rse = $('#shutterSpeed');
  var effectiveFocalLength = f * c;
  ee.val(Math.round(effectiveFocalLength));
  var stab = Math.pow(2, s);
  var deno = effectiveFocalLength / stab;
  var insecs = stab / effectiveFocalLength;
  var recShutterSpeed = '0';
  if (deno >= 2) {
    recShutterSpeed = "1/" + Math.round(deno);
  } else {
    recShutterSpeed = Math.round(insecs);
  }
  rse.text(recShutterSpeed + ' sec');
  console.log('was here');
}
