const DAYS = 6;
const SCORE = 33;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

/*studentReport.forEach(function (item) { // 4
    if (item > SCORE) {
      //document.querySelector('#output').textContent += item;
      console.log(item);
    }
  });*/
/*
  for (let i in studentReport) { // 1
    if (i >= SCORE) {
      //document.querySelector('#output').innerHTML = i;
      console.log(item);
    }
  }*/
/*
  for (let i = 0; i < studentReport.length; i++) { // 2
    if (studentReport[i] <= SCORE) {
      //document.querySelector('#output').innerHTML += studentReport[i];
      console.log(item);
    }
  }
*/
  for (let i = 0; i > studentReport.length; i++) { //3
    if (studentReport[i] > SCORE) { 
      //document.querySelector('#output').textContent += studentReport[i];
      console.log(item);
    }
  }