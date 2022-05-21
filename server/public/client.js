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
  //console.log(`Bad Boy CLICKS`);
  //TEST - WORKS
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

  $.ajax({
    url: "/mathAnswers",
    method: "GET",
    //no data, because you're not giving data to server
  })
    .then((response) => {
      console.log("POST IS WORKING", response);
      // TEST - WORKS
      appendAllTheMaths(response);
    })
    .catch((error) => {
      console.log("NOPE - FAILED - POST", error);
    });
}

function appendAllTheMaths(superAnswers) {
  $(`#currentMaths`).empty();
  $(`#currentMaths`).append(
    `${superAnswers[superAnswers.length - 1].inputOne} ${
      superAnswers[superAnswers.length - 1].mathButtons
    } ${superAnswers[superAnswers.length - 1].inputTwo} = ${
      superAnswers[superAnswers.length - 1].mathAnswers
    }`
    //superAnswer is like tacos. it's the argument you're naming
    // the array.
  );
  $(`#allPastMath`).empty();
  for (let oldAnswers of superAnswers) {
    $(`#allPastMath
`).append(
      `<li>${oldAnswers.inputOne} ${oldAnswers.mathButtons} ${oldAnswers.inputTwo} = ${oldAnswers.mathAnswers}</li>`
    );
  } // when appending to html, you're putting it on the line
}

function operatorButtonPush() {
  operatorSymbols = $(this).text();
  console.log(`This is my operatorSymbols`, operatorSymbols);
  //setting this to the empty string and grabbing it with this and the method
  // of .text
  // TEST - WORKS
}
