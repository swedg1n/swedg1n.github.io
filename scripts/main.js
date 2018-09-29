var myHeading1 = document.getElementById("sum-header1");
var myHeading2 = document.getElementById("sum-header2");
var myHeading3 = document.getElementById("sum-header3");
var myHeading4 = document.getElementById("sum-header4");
var myHeading5 = document.getElementById("sum-header5");
var aveCorrect = document.getElementById("ave-speed-correct-in-row");
var overallScore = document.getElementById("overall-score");
var overallSpeed = document.getElementById("overall-speed");
var correctInRow = 0;
var totalCorrect = 0;
var totalNumber = 0;
var totalTimeCorrect = 0;
var totalTime = 0;
var first = true;
var startTime, endTime;
var total2 = 0;

document.getElementById("button").focus();

var veld = document.getElementById("msg");
veld.readOnly = true;

var input = document.getElementById("msg");

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("button").click();
  }
});

function newProblem() {
  var veld = document.getElementById("msg");
  veld.readOnly = false;
  veld.style.backgroundColor = "initial";
  veld.style.fontWeight = 'normal';
  veld.value = '';
  veld.focus();

  document.getElementById("sum-header2").style.display = "none";
  document.getElementById("sum-header3").style.display = "none";
  document.getElementById("sum-header4").style.display = "none";



var total = 0;
var optAry = [2,3,4,5,6,7,8,9];
var operAry = ['*','+','-','/'];
var operatorArray = ['','','',''];
var operandArray = [0,0,0,0,0];
var operatorLevelArray = [1,1,1,1];
var level2SubResultArray = [0,0,0,0];
var level3SubResultArray = [0,0,0,0];
var level4SubResultArray = [0,0,0,0];
var level5SubResultArray = [0,0,0,0];

for (i=0;i<operandArray.length;i++){
  operandArray[i]=optAry[Math.floor(Math.random() * 8)];
}

var div = false;
for (i=0;i<operatorArray.length;i++){
  operatorArray[i]=operAry[Math.floor(Math.random() * 4)];
  if ((div) & (operatorArray[i]==='/')){
    operatorArray[i]=operAry[Math.floor(Math.random() * 3)];
  }
  else if (operatorArray[i]==='/'){
    div = true;
  }
}

var level = 1;
for (i=0;i<operatorArray.length;i++){
  if ((operatorArray[i]==='*')||(operatorArray[i]==='/')){
    level = level + 1;
    operatorLevelArray[i]= level;
  }
  else{
    level = 1;
  }
}

var j = 0;
for (i=0;i<operatorLevelArray.length;i++){
  j = i + 1;
  if (operatorLevelArray[i] === 2){
    if (operatorArray[i]==='/'){
      if (modulus(operandArray[i],operandArray[j])!==0){
        operatorArray[i] = '%'
        if (operandArray[i]<operandArray[j]){
          var tmp = operandArray[i];
          operandArray[i] = operandArray[j];
          operandArray[j] = tmp;
        }
        if (modulus(operandArray[i],operandArray[j])===0){
          operatorArray[i] = '/'
        }
      }
    }
    if (operatorArray[i]==='*'){
      level2SubResultArray[i] = multiply(operandArray[i],operandArray[j]);
    }
    if (operatorArray[i]==='/'){
      level2SubResultArray[i] = divide(operandArray[i],operandArray[j]);
    }
    if (operatorArray[i]==='%'){
      level2SubResultArray[i] = modulus(operandArray[i],operandArray[j]);
    }
  }
}

var j = 0;
var k = 0;
for (i=0;i<operatorLevelArray.length;i++){
  j = i - 1;
  k = i + 1
  if (operatorLevelArray[i] === 3){
    if (operatorArray[i]==='/'){
      if (modulus(level2SubResultArray[j],operandArray[k])!==0){
        operatorArray[i] = '%'
      }
    }
    if (operatorArray[i]==='*'){
      level3SubResultArray[i] = multiply(level2SubResultArray[j],operandArray[k]);
    }
    if (operatorArray[i]==='/'){
      level3SubResultArray[i] = divide(level2SubResultArray[j],operandArray[k]);
    }
    if (operatorArray[i]==='%'){
      level3SubResultArray[i] = modulus(level2SubResultArray[j],operandArray[k]);
    }
  }
}

var j = 0;
var k = 0;
for (i=0;i<operatorLevelArray.length;i++){
  j = i - 1;
  k = i + 1
  if (operatorLevelArray[i] === 4){
    if (operatorArray[i]==='/'){
      if (modulus(level3SubResultArray[j],operandArray[k])!==0){
        operatorArray[i] = '%'
      }
    }
    if (operatorArray[i]==='*'){
      level4SubResultArray[i] = multiply(level3SubResultArray[j],operandArray[k]);
    }
    if (operatorArray[i]==='/'){
      level4SubResultArray[i] = divide(level3SubResultArray[j],operandArray[k]);
    }
    if (operatorArray[i]==='%'){
      level4SubResultArray[i] = modulus(level3SubResultArray[j],operandArray[k]);
    }
  }
}

var j = 0;
var k = 0;
for (i=0;i<operatorLevelArray.length;i++){
  j = i - 1;
  k = i + 1
  if (operatorLevelArray[i] === 5){
    if (operatorArray[i]==='/'){
      if (modulus(level4SubResultArray[j],operandArray[k])!==0){
        operatorArray[i] = '%'
      }
    }
    if (operatorArray[i]==='*'){
      level5SubResultArray[i] = multiply(level4SubResultArray[j],operandArray[k]);
    }
    if (operatorArray[i]==='/'){
      level5SubResultArray[i] = divide(level4SubResultArray[j],operandArray[k]);
    }
    if (operatorArray[i]==='%'){
      level5SubResultArray[i] = modulus(level4SubResultArray[j],operandArray[k]);
    }
  }
}

var j = 0;
var k = 0;
var l = 0;
var m = 0;
var n = 0;
var hint = '';
var skip1 = false;
var skip2 = false;
for (i=0;i<operatorLevelArray.length;i++){
  j = i - 1;
  k = i + 1;
  l = i + 2;
  m = i + 3;
  n = i + 4;

  if (skip1){
    skip1 = false;
    continue;
  }
  if (skip2){
    skip2 = false;
    skip1 = true;
    continue;
  }

  if (i<operatorLevelArray.length - 1){
    if (operatorLevelArray[i] === 1){
      if (operatorLevelArray[k] === 1){
        if (operatorArray[i] === '+'){
          if (i === 0){
            total = total + add(operandArray[i],operandArray[k]);
            hint = `${operandArray[i]} ${operatorArray[i]} ${operandArray[k]}`;
          }
          else {
            total = add(total,operandArray[k]);
            hint = `${hint} ${operatorArray[i]} ${operandArray[k]}`;
          }
        }
        else {
          if (i === 0){
            total = total + subtract(operandArray[i],operandArray[k]);
            hint = `${operandArray[i]} ${operatorArray[i]} ${operandArray[k]}`;
          }
          else {
            total = subtract(total,operandArray[k]);
            hint = `${hint} ${operatorArray[i]} ${operandArray[k]}`;
          }
        }
      }
      if (operatorLevelArray[k] === 2){
        if (operatorLevelArray[l] !== 3){
          if (operatorArray[i] === '+'){
            if (i === 0){
              total = total + add(operandArray[i],level2SubResultArray[k]);
              hint = `(${operandArray[i]} ${operatorArray[i]} ${operandArray[k]})`;
            }
            else {
              total = add(total,level2SubResultArray[k]);
              hint = `${hint} ${operatorArray[i]} (${operandArray[k]} ${operatorArray[k]} ${operandArray[l]})`;
            }
          }
          else {
            if (i === 0){
              total = total + subtract(operandArray[i],level2SubResultArray[k]);
              hint = `(${operandArray[i]} ${operatorArray[i]} ${operandArray[k]})`;
            }
            else {
              total = subtract(total,level2SubResultArray[k]);
              hint = `${hint} ${operatorArray[i]} (${operandArray[k]} ${operatorArray[k]} ${operandArray[l]})`;

            }
          }
        }
        else {
          if (operatorLevelArray[m] !== 4){
            skip1 = true;
            if (operatorArray[i] === '+'){
              if (i === 0){
                total = total + add(operandArray[i],level3SubResultArray[l]);
              }
              else {
                total = add(total,level3SubResultArray[l]);
              }
            }
            else {
              if (i === 0){
                total = total + subtract(operandArray[i],level3SubResultArray[l]);
              }
              else {
                total = subtract(total,level3SubResultArray[l]);
              }
            }
          }
          else{
            skip2 = true;
            if (operatorArray[i] === '+'){
              if (i === 0){
                total = total + add(operandArray[i],level4SubResultArray[m]);
              }
              else {
                total = add(total,level4SubResultArray[m]);
              }
            }
            else {
              if (i === 0){
                total = total + subtract(operandArray[i],level4SubResultArray[m]);
              }
              else {
                total = subtract(total,level4SubResultArray[m]);
              }
            }
          }
        }
      }
    }
    else{
      if (i===0){
        if (operatorLevelArray[k] !== 3){
          total = level2SubResultArray[i];
          hint = `(${operandArray[i]} ${operatorArray[i]} ${operandArray[k]})`;
        }
        else if (operatorLevelArray[l] !== 4){
          skip1 = true;
          total = level3SubResultArray[k];
          hint = `((${operandArray[i]} ${operatorArray[i]} ${operandArray[k]}) ${operatorArray[k]} ${operandArray[l]})`;
        }
        else if (operatorLevelArray[m] !== 5){
          skip2 = true;
          total = level4SubResultArray[l];
          hint = `(((${operandArray[i]} ${operatorArray[i]} ${operandArray[k]}) ${operatorArray[k]} ${operandArray[l]}) ${operatorArray[l]} ${operandArray[m]})`;
        }
        else{
          total = level5SubResultArray[m];
          hint = `(((${operandArray[i]} ${operatorArray[i]} ${operandArray[k]}) ${operatorArray[k]} ${operandArray[l]}) ${operatorArray[l]} ${operandArray[m]}) ${operatorArray[m]} ${operandArray[n]}`;
          break;
        }
      }
    }
  }
  else {
    if ((operatorLevelArray[i] === 1) && (operatorArray[i] === '+')) {
      total = add(total,operandArray[k]);
      hint = `${hint} ${operatorArray[i]} ${operandArray[k]}`;
    }
    else if ((operatorLevelArray[i] === 1) && (operatorArray[i] === '-')){
      total = subtract(total,operandArray[k]);
      hint = `${hint} ${operatorArray[i]} ${operandArray[k]}`;
    }
  }
}

function multiply(a,b) {
  return a * b;
}

function add(a,b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

function modulus(a,b) {
  return a % b;
}

function divide(a,b) {
  return a / b;
}

myHeading1.innerHTML = `${operandArray[0]} ${operatorArray[0]} ${operandArray[1]} ${operatorArray[1]} ${operandArray[2]} ${operatorArray[2]} ${operandArray[3]} ${operatorArray[3]} ${operandArray[4]}`;
myHeading3.innerHTML = total;
total2 = total;

var j = 0;
var k = 0;
var l = 0;
var skip = false;
var hint2 = '';
start = '';
open = 3;
index = -1;

if (operatorLevelArray.indexOf(2)>-1){
  index = operatorLevelArray.indexOf(2);
  open = open - 1;
  if (operatorLevelArray.indexOf(2,++index)>-1){
    open = open - 1;
  }
  if (operatorLevelArray.indexOf(3)>-1){
    open = open - 1;
  }
  if (operatorLevelArray.indexOf(4)>-1){
    open = open - 1;
  }
}

if (open===3){
  hint2 = '(((';
}
else if (open===2){
  hint2 = '((';
}
else if (open===1){
  hint2 = '(';
}

for (i=0;i<operatorLevelArray.length-1;i++){
  j = i - 1;
  k = i + 1;
  l = i + 2;

  if (operatorLevelArray[i] === 1){
    if (operatorLevelArray[k] === 1){
      if (i===0){
        hint2 = `${hint2}${operandArray[i]} ${operatorArray[i]} ${operandArray[k]}${')'}`;
        open = open - 1;
        skip = true;
      }
      else{
        if (open>0){
          if (!skip){
            hint2 = `${hint2}${')'} ${operatorArray[i]} ${operandArray[k]}`;
            open = open - 1;
            skip = true;
          }
          else{
            hint2 = `${hint2} ${operatorArray[i]} ${operandArray[k]}`;
            skip = false;
          }
        }
      }
    }
  }
  if (operatorLevelArray[i] === 1){
    if (operatorLevelArray[k] === 2){
      if (i === 0){
        hint2 = `${hint2}${operandArray[i]} ${operatorArray[i]} `;
      }
      else{
        if (open > 0 ){
          if (!skip){
            hint2 = `${hint2}${')'} ${operatorArray[i]} `;
            open = open - 1;
          }
          else{
            hint2 = `${hint2} ${operatorArray[i]} `;
            skip = false;
          }
        }
        else{
          hint2 = `${hint2} ${operatorArray[i]} `;
        }
      }
    }
  }
  if (operatorLevelArray[i] === 2){
    if (operatorLevelArray[k] === 1){
      if (i === 0){
        hint2 = `${hint2}${'('}${operandArray[i]} ${operatorArray[i]} ${operandArray[k]}${')'}`;
        skip = true;
      }
      else{
        hint2 = `${hint2}${'('}${operandArray[i]} ${operatorArray[i]} ${operandArray[k]}${')'}`;
      }
    }
  }
  if (operatorLevelArray[i] === 2){
    if ((operatorLevelArray[k] === 3) && (operatorLevelArray[l] !== 4)){
      if (i === 0){
        hint2 = `${hint2}${'('}${'('}${operandArray[i]} ${operatorArray[i]} ${operandArray[k]}${')'} ${operatorArray[k]} ${operandArray[l]}${')'}`;
        skip = true;
      }
      else if (i < 2){
        hint2 = `${hint2}${'('}${'('}${operandArray[i]} ${operatorArray[i]} ${operandArray[k]}${')'} ${operatorArray[k]} ${operandArray[l]}${')'}`;
      }
    }
  }
}
//level 4 at front
if (operatorLevelArray[2] === 4){
  hint2 = `${'('}${'('}${'('}${operandArray[0]} ${operatorArray[0]} ${operandArray[1]}${')'} ${operatorArray[1]} ${operandArray[2]}${')'} ${operatorArray[2]} ${operandArray[3]}`;
}
//last operator added seperately after for loop
if (operatorLevelArray[operatorLevelArray.length-1] === 1){
  hint2 = `${hint2}${')'} ${operatorArray[3]} ${operandArray[4]}`;
}
if (operatorLevelArray[operatorLevelArray.length-1] === 2){
  hint2 = `${hint2} ${'('}${operandArray[3]} ${operatorArray[3]} ${operandArray[4]}${')'}`;
}
if (operatorLevelArray[operatorLevelArray.length-1] === 3){
  hint2 = `${hint2} ${'('}${'('}${operandArray[2]} ${operatorArray[2]} ${operandArray[3]}${')'} ${operatorArray[3]} ${operandArray[4]}${')'}`;
}
if (operatorLevelArray[operatorLevelArray.length-1] === 4){
  hint2 = `${hint2} ${'('}${'('}${'('}${operandArray[1]} ${operatorArray[1]} ${operandArray[2]}${')'} ${operatorArray[2]} ${operandArray[3]}${')'} ${operatorArray[3]} ${operandArray[4]}${')'}`;
}
if (operatorLevelArray[operatorLevelArray.length-1] === 5){
  hint2 = `${'('}${'('}${'('}${operandArray[0]} ${operatorArray[0]} ${operandArray[1]}${')'} ${operatorArray[1]} ${operandArray[2]}${')'} ${operatorArray[2]} ${operandArray[3]}${')'} ${operatorArray[3]} ${operandArray[4]}`;
}

myHeading2.innerHTML = hint2;
}

function myStart() {
  startTime = new Date();
};

function myEnd() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  var seconds = timeDiff;
  return seconds;
}

function myFunction() {
  if (first){
    newProblem();
    myStart();
    var button = document.getElementById('button');
    button.textContent = 'Submit';
    first = false;
  }
  else{
    var button = document.getElementById('button');
    if (button.textContent === 'Submit'){
      button.textContent = 'New';
      clickedSubmit();
      if (document.getElementById("msg").value == total2){
        correctInRow = correctInRow + 1;
        totalCorrect = totalCorrect + 1;
        totalNumber = totalNumber + 1
        myHeading5.innerHTML = correctInRow;
        var speed = myEnd();
        myHeading4.innerHTML = `${(speed).toFixed(2)} seconds`;
        totalTimeCorrect = totalTimeCorrect + speed;
        totalTime = totalTime + speed;
        aveCorrect.innerHTML = `Correct in a row speed: ${(totalTimeCorrect/correctInRow).toFixed(2)} sec`;
        overallScore.innerHTML = `Overall score: ${totalCorrect}/${totalNumber}`;
        overallSpeed.innerHTML = `Overall speed: ${(totalTime/totalNumber).toFixed(2)} sec`;
      }
      else{
        correctInRow = 0;
        totalNumber = totalNumber + 1
        myHeading5.innerHTML = correctInRow;
        var speed = myEnd();
        myHeading4.innerHTML = speed;
        myHeading4.innerHTML = `${(speed).toFixed(2)} seconds`;
        totalTimeCorrect = 0;
        totalTime = totalTime + speed;
        aveCorrect.innerHTML = `Correct in a row speed: 0.00 sec`;
        overallScore.innerHTML = `Overall score: ${totalCorrect}/${totalNumber}`;
        overallSpeed.innerHTML = `Overall speed: ${(totalTime/totalNumber).toFixed(2)} sec`;
      }
    }
    else{
      newProblem();
      myStart();
      var button = document.getElementById('button');
      if (button.textContent == 'New'){
        button.textContent = 'Submit';
      }
    }
  }
}

function clickedSubmit(){
  document.getElementById("sum-header2").style.display = "block";
  document.getElementById("sum-header3").style.display = "block";
  document.getElementById("sum-header4").style.display = "block";
  if (document.getElementById("msg").value == total2){
    var veld = document.getElementById("msg");
    veld.readOnly = true;
    veld.style.backgroundColor = "#66ff33";
    veld.style.fontWeight = 'bold';
  }
  else{
    var veld = document.getElementById("msg");
    veld.readOnly = true;
    veld.style.backgroundColor = "red";
    veld.style.fontWeight = 'bold';
  }
}

myHeading5.innerHTML = correctInRow;
