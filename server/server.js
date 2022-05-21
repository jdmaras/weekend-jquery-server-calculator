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

  currentMathArray.push(currentInputs);
  console.log(`Did this push currentInputs`, currentMathArray);
  res.sendStatus(201);
});

function addTogetherInputs(numOne, numTwo) {
  return Number(numOne) + Number(numTwo);
  // Number was placed around the addition because of
  // the concatanation of the 2 numbers with an addition
  // symbol
  console.log(`This adds the two`, addTogetherInputs);
}
function subtractTogetherInputs(numOne, numTwo) {
  return numOne - numTwo;
  console.log(`This subtracts the two`, subtractTogetherInputs);
}
function multiplyTogetherInputs(numOne, numTwo) {
  return numOne * numTwo;
  console.log(`This multiplies the two`, multiplyTogetherInputs);
}
function divideTogetherInputs(numOne, numTwo) {
  return numOne / numTwo;
  console.log(`This divides the two`, divideTogetherInputs);
}

app.listen(5000, () => {
  console.log(`I'M LISTENING, BABY`);
});
