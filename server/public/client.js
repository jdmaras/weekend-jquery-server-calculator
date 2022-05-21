$(document).ready(onReady);

function onReady() {
  console.log(`I'm ready - Sponge Bob`);
  $(".mathButton").on("click", operatorButtonPush);
  $("#clearButton").on("click", onSubmit);
  $("#equalButton").on("click", onSubmit);
}

operatorSymbols = "";

function onSubmit() {
  //evt.preventDefault();
  console.log(`Bad Boy CLICKS`);
  let allInputs = {
    inputOne: $("#inputOne").val(),
    inputTwo: $("#inputTwo").val(),
    mathButtons: operatorSymbols,
    mathAnswers: 0,
  };
  //mathButtons sends over all of my operators
  //mathAnswers is what they all equate to

  console.log(`Do I get input values?`, allInputs.inputOne);
  console.log(`Do I get input values?`, allInputs.inputTwo);
  //TEST - WORKS

  $.ajax({
    url: "/inputvalue",
    method: "POST",
    data: allInputs,
  })
    .then((response) => {
      console.log("POST IS WORKING", response);
      // TEST - WORKS
    })
    .catch((error) => {
      console.log("NOPE - FAILED - POST", error);
    });
}

function operatorButtonPush() {
  operatorSymbols = $(this).text();
  console.log(`This is my operatorSymbols`, operatorSymbols);
  //setting this to the empty string and grabbing it with this and the method
  // of .text
}
