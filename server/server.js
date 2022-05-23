const express = require(`express`);
const bodyParser = require(`body-parser`);
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let currentMathArray = [];

app.use(express.static(`server/public`));

app.post("/inputvalue", (req, res) => {
  //inputValue is url from 'post' method so you have to accept here
  let currentInputs = req.body;
  //console.log(`the posted input values: `, req.body);
  console.log(`posted with new variable`, currentInputs);
  //Test - WORKS

  mathEquations(currentInputs);
  // calling all of my math button functions

  currentMathArray.push(currentInputs);
  console.log(`Did this push currentInputs`, currentMathArray);

  res.sendStatus(201);
  // 201 - means "created" and it sends back that you're good to go
});

app.get("/mathAnswers", (req, res) => {
  res.send(currentMathArray);
  //when testing a get, type in the /mathAnswers (or whatever the URL is)
  // and test the url on your localhost:5000/mathAnswers
});

function mathEquations(arrg) {
  if (arrg.mathButtons === "+") {
    return addTogetherInputs(arrg);
  } else if (arrg.mathButtons === "-") {
    return subtractTogetherInputs(arrg);
  } else if (arrg.mathButtons === "X") {
    return multiplyTogetherInputs(arrg);
  } else {
    return divideTogetherInputs(arrg);
  }
}

function addTogetherInputs(addition) {
  addition.mathAnswers = Number(addition.inputOne) + Number(addition.inputTwo);
  // - Number was placed around the addition because of
  // the concatanation of the 2 numbers with an addition
  // - addition is the argument that becomes input object
  // and setting the object.mathAnswers makes it change the 0
  console.log(`This adds the two`, addTogetherInputs);
}
function subtractTogetherInputs(subtraction) {
  subtraction.mathAnswers = subtraction.inputOne - subtraction.inputTwo;
  console.log(`This subtracts the two`, subtractTogetherInputs);
}
function multiplyTogetherInputs(multiplication) {
  multiplication.mathAnswers =
    multiplication.inputOne * multiplication.inputTwo;
  console.log(`This multiplies the two`, multiplyTogetherInputs);
}
function divideTogetherInputs(division) {
  division.mathAnswers = division.inputOne / division.inputTwo;
  console.log(`This divides the two`, divideTogetherInputs);
}

app.listen(5000, () => {
  console.log(`I'M LISTENING, BABY`);
});

// function grabOperator() {
//   opperator = $(this).val();
//   console.log(`operator is`, opperator);
// }

// in the html, you put value ="+"
// and that would make that operator
// access what that would do
// you would setup a click operator in onReady
// to access it
