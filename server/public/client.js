$(document).ready(onReady);

function onReady() {
  console.log(`I'm ready - Sponge Bob`);
  $("#additionButton").on("click", onSubmit);
  $("#subtractionButton").on("click", onSubmit);
  $("#multiplicationButton").on("click", onSubmit);
  $("#divideButton").on("click", onSubmit);
  $("#clearButton").on("click", onSubmit);
  $("#equalButton").on("click", onSubmit);
}

function onSubmit() {
  console.log(`Bad Boy CLICKS`);
}
