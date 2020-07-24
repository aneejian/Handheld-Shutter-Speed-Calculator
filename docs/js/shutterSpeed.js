var inputFocalLength;
var inputCropFactor;
var inputStabilization;
var inputEffectiveFocalLength;
var inputShutterSpeed;

$(window).ready(CalculateShutterSpeed());

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

function setElements() {
  inputFocalLength = $('#focalLength');
  inputCropFactor = $('#cropFactor');
  inputStabilization = $('#stabilization');
  inputEffectiveFocalLength = $('#effectiveFocalLength');
  inputShutterSpeed = $('#shutterSpeed');
}

function CalculateShutterSpeed() {
  setElements();
  var focalLength = inputFocalLength.val();
  var cropFactor = inputCropFactor.val();
  var stabilizationStops = inputStabilization.val();
  var effectiveFocalLength = focalLength * cropFactor;
  inputEffectiveFocalLength.val(Math.round(effectiveFocalLength));
  var stabilization = Math.pow(2, stabilizationStops);
  var denominator = effectiveFocalLength / stabilization;
  var insecs = stabilization / effectiveFocalLength;
  var recommendedShutterSpeed = '0';
  if (denominator >= 2) {
    recommendedShutterSpeed = "1/" + Math.round(denominator);
  } else {
    recommendedShutterSpeed = Math.round(insecs);
  }
  inputShutterSpeed.text(recommendedShutterSpeed + ' sec');
}
