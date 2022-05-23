$(document).ready(onReady);

function onReady() {
  console.log(`I'm ready - Sponge Bob`);
  $(".mathButton").on("click", operatorButtonPush);
  $("#clearButton").on("click", clearsTheInputs);
  $("#equalButton").on("click", onSubmit);
  getObjectFromServer();
}

let operatorSymbols = "";

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
  // - being sent as objects with {}

  //console.log(`Do I get input values?`, allInputs.inputOne);
  //console.log(`Do I get input values?`, allInputs.inputTwo);
  //TEST - WORKS
  if (
    allInputs.inputOne === "" ||
    allInputs.inputTwo === "" ||
    allInputs.mathButtons === ""
  ) {
    return false;
  }
  // this if keeps the equals button from running if nothing is in inputs
  // the false stops this function from running if all 3 are not selected
  $.ajax({
    url: "/inputvalue",
    method: "POST",
    data: allInputs,
  })
    .then((response) => {
      console.log("POST IS WORKING", response);
      // TEST - WORKS
      clearsTheInputs();
      // running the clearInputs function so the user doesn't need to
      // clear the inputs for the next equation
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

//
function appendAllTheMaths(array) {
  $(`#currentMaths`).empty();
  $(`#currentMaths`).append(
    `${array[array.length - 1].inputOne} ${
      array[array.length - 1].mathButtons
    } ${array[array.length - 1].inputTwo} = ${
      array[array.length - 1].mathAnswers
    }`
    //superAnswer is like tacos. it's the argument you're naming
    // the array.
  );
  $(`#allPastMath`).empty();
  for (let oldAnswers of array) {
    $(`#allPastMath`).append(
      `<li>${oldAnswers.inputOne} ${oldAnswers.mathButtons} ${oldAnswers.inputTwo} = ${oldAnswers.mathAnswers}</li>`
    );
  } // when appending to html, you're putting it on the line
}

function getObjectFromServer() {
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
//setting up this function will keep your information on the page

function operatorButtonPush() {
  operatorSymbols = $(this).text();
  console.log(`This is my operatorSymbols`, operatorSymbols);
  //setting this to the empty string and grabbing it with this and the method
  // of .text
  // TEST - WORKS
}
function clearsTheInputs() {
  operatorSymbols = "";
  $("#inputOne").val("");
  $("#inputTwo").val("");
}

//jQuery gives you a yellow warning when you start the page because it is
//using that 'get' to look at the empty array that hasn't had any information
// put in yet. Once an equation is run, that goes away on page refresh
