const express = require(`express`);
const bodyParser = require(`body-parser`);
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let currentMathArray = [];
let previousMathArray = [];

app.use(express.static(`server/public`));

app.post("/inputvalue", (req, res) => {
  //inputValue is url from 'post' method so you have to accept here
  let currentInputs = req.body;
  //console.log(`the posted input values: `, req.body);
  console.log(`posted with new variable`, currentInputs);
  //Test - WORKS
  res.sendStatus(201);
});

app.listen(5000, () => {
  console.log(`I'M LISTENING, BABY`);
});
