$(document).ready(onReady);

function onReady() {
  console.log(`I'm ready - Sponge Bob`);
  $(".mathButton").on("click", onSubmit);
  $("#clearButton").on("click", onSubmit);
  $("#equalButton").on("click", onSubmit);
}

function onSubmit() {
  //evt.preventDefault();
  console.log(`Bad Boy CLICKS`);
  let bothInputs = {
    inputOne: $("#inputOne").val(),
    inputTwo: $("#inputTwo").val(),
  };
  console.log(`Do I get input values?`, bothInputs.inputOne);
  console.log(`Do I get input values?`, bothInputs.inputTwo);
  //TEST - WORKS
  $.ajax({
    url: "/inputvalue",
    method: "POST",
    data: bothInputs,
  })
    .then((response) => {
      console.log("POST IS WORKING", response);
      // TEST - WORKS
    })
    .catch((error) => {
      console.log("NOPE - FAILED - POST", error);
    });
}
