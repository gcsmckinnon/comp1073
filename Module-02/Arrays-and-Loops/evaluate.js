// Step 1 Test
scm.evaluate(function () {
  scm.isBlockScope('myFavFoods', myFavFoods);

  if (scm.correctLength('myFavFoods', myFavFoods, 3))
    scm.selectAndServe('#step1', `let myFavFoods = ["${myFavFoods[0]}", "${myFavFoods[1]}", "${myFavFoods[2]}"];`);
}, '#step1');

// Step 2 Test
scm.evaluate(function () {
  scm.isBlockScope('mffFirst', mffFirst);

  scm.test((mffFirst === myFavFoods[0]), 'let mffFirst = myFavFoods[0];', 'You have chosen the incorrect index.', '#step2');
}, '#step2');

// Step 3 Test
scm.evaluate(function () {
  scm.isBlockScope('mffLast', mffLast);

  scm.test((mffLast === myFavFoods[2]), 'let mffLast = myFavFoods[2];', 'You have chosen the incorrect index.', '#step3');
}, '#step3');

// Step 4 Test
const step4Test = "The falcon flies south for the winter.";
console.log(step4Test);
scm.evaluate(function () {
  scm.isBlockScope('theConsoleMessage', theConsoleMessage);
  scm.isString('theConsoleMessage', theConsoleMessage);

  scm.test((theConsoleMessage === step4Test), `let theConsoleMessage = "${step4Test}";`, 'Your value is not the same as the output.', '#step4');
}, '#step4');

// Step 5 Test
const mySecretVar = 256;
scm.evaluate(function () {
  scm.isBlockScope('mySecretVarWas', mySecretVarWas);
  scm.isNumber('mySecretVarWas', mySecretVarWas);

  scm.test((mySecretVarWas === mySecretVar), `let mySecretVarWas = ${mySecretVar};`, 'Incorrect value.', '#step5');
}, '#step5');

// Step 5 Test
const mySecretArr = ['JavaScript', 'is', 'so', 'much', 'fun'];
scm.evaluate(function () {
  scm.isBlockScope('numOfSecretElements', numOfSecretElements);
  scm.isNumber('numOfSecretElements', numOfSecretElements);

  scm.test((numOfSecretElements === mySecretArr.length), `let numOfSecretElements = ${mySecretArr.length};`, 'Incorrect value.', '#step6');
}, '#step6');

// Step 7 Test
scm.evaluate(function () {
  scm.isNumber('davesSciGr', davesSciGr)
  scm.isBlockScope('davesSciGr', davesSciGr);

  scm.test((davesSciGr === students[4][0][1]), `let davesSciGr = ${davesSciGr};`, `Your value is incorrect. it should be ${students[4][0][1]}`, '#step7')
}, '#step7');

// Step 8 Test
scm.evaluate(function () {
  scm.isString('bobsLastName', bobsLastName)
  scm.isBlockScope('bobsLastName', bobsLastName);

  scm.test((bobsLastName === students[2][1]), `let bobsLastName = "${bobsLastName}";`, `Your value is incorrect. it should be ${students[2][1]}`, '#step8')
}, '#step8');

// Step 9 Test
scm.evaluate(function () {
  scm.isNumber('bobsGeoGr', bobsGeoGr)
  scm.isBlockScope('bobsGeoGr', bobsGeoGr);

  scm.test((bobsGeoGr === students[4][1][2]), `let bobsGeoGr = ${bobsGeoGr};`, `Your value is incorrect. it should be ${students[4][1][2]}`, '#step9')
}, '#step9');

// Step 10 Test
scm.evaluate(function () {
  scm.isNumber('numOfStudents', numOfStudents);
  scm.isBlockScope('numOfStudents', numOfStudents);

  scm.test((numOfStudents === students.length), `let numOfStudents = ${numOfStudents};`, `Your value is incorrect. It should be ${students.length}`, '#step10')
}, '#step10');

// Step 11 Test
scm.evaluate(function () {
  scm.isNumber('numOfStudentsFirstNames', numOfStudentsFirstNames);
  scm.isBlockScope('numOfStudentsFirstNames', numOfStudentsFirstNames);

  scm.test((numOfStudentsFirstNames === students[2].length), `let numOfStudentsFirstNames = ${numOfStudentsFirstNames};`, `Your value is incorrect. It should be ${students[2].length}`, '#step11')
}, '#step11');

// Step 12 Test
scm.evaluate(function () {
  scm.isNumber('numOfStudentsCourses', numOfStudentsCourses);
  scm.isBlockScope('numOfStudentsCourses', numOfStudentsCourses);

  scm.test((numOfStudentsCourses === students[3][0].length), `let numOfStudentsCourses = ${numOfStudentsCourses};`, `Your value is incorrect. It should be ${students[3][0].length}`, '#step12')
}, '#step12');

// Steps 13 to 17
scm.evaluate(function () {
  scm.isArray('initArr', initArr);
  scm.isBlockScope('initArr', initArr);

  if (!scm.correctLength('initArr', initArr, 7))
    throw {message: `Your array length is incorrect. It is ${initArr.length} when it should be 7.`}

  let val = initArr.reduce(function (a, b) { return a+b });
  scm.test((val === 279), `All Good!`, `Your value ${val} is incorrect. The correct total should be 279.`, '#step13to17testResult');

  if (val == 279) {
    scm.selectAndServe('#step13', 'initArr.push(4, 5, 6);');
    scm.selectAndServe('#step14', 'initArr.unshift(7, 8);');
    scm.selectAndServe('#step15', 'initArr.pop();');
    scm.selectAndServe('#step16', 'initArr.shift();');
    scm.selectAndServe('#step17', 'initArr.splice(3, 0, 256);');
  }
}, '#step13to17testResult');

// Step 18
scm.evaluate(function () {
  scm.isNumber('sentinel', sentinel);
  scm.isBlockScope('sentinel', sentinel);

  if (sentinel != 8 && sentinel != 10)
    throw {message: `Sentinel should not be equal to ${sentinel}. It should equal 8.`};
}, '#step18');

// Step 19
scm.evaluate(function () {
  scm.isNumber('sentinel', sentinel);
  scm.isBlockScope('sentinel', sentinel);

  if (sentinel != 10)
    throw {message: `Sentinel should not be equal to ${sentinel}. It should equal 10.`};
}, '#step19');

// Step 20
scm.evaluate(function () {
  scm.isNumber('forLoopValue', forLoopValue);
  scm.isBlockScope('forLoopValue', forLoopValue);

  if (forLoopValue != 55)
    throw {message: `forLoopValue should not be equal to ${forLoopValue}. It should equal 55.`};
}, '#step20');

// Step 21
scm.evaluate(function () {
  scm.isNumber('forOfLoopValue', forOfLoopValue);
  scm.isBlockScope('forOfLoopValue', forOfLoopValue);

  scm.isArray('exArr', exArr);
  scm.isBlockScope('exArr', exArr);

  if (forOfLoopValue != 55)
    throw {message: `forOfLoopValue should not be equal to ${forOfLoopValue}. It should equal 55.`};
}, '#step21');