// Step 1 Test
scm.evaluate(function () {
  scm.selectAndServe('#step1', `greeting = "${greeting}";`);
}, '#step1');

// Step 2 Test
scm.evaluate(function () {
  scm.isString('fullName', fullName);
  scm.selectAndServe('#step2', `fullName = "${fullName}";`);
}, '#step2');

// Step 3 Test
scm.evaluate(function () {
  scm.isNumber('age', age);
  scm.selectAndServe('#step3', `age = ${age};`);
}, '#step3');

// Step 4 Test
scm.evaluate(function () {
  scm.isNumber('hourlyIncome', hourlyIncome);
  scm.selectAndServe('#step4', `hourlyIncome = ${hourlyIncome};`);
}, '#step4');

// Step 5 Test
scm.evaluate(function () {
  scm.isBoolean('married', married);
  scm.selectAndServe('#step5', `married = ${married};`);
}, '#step5');

// Step 6 Test
scm.evaluate(function () {
  scm.isString('favFood', favFood);
  scm.isBlockScope('favFood', favFood);

  // Check if it's immutable
  let temp = favFood;
  try {
    favFood = null;
  } catch (err){}

  if (favFood !== null)
    throw {message: `favFood is immutable.`};
  else
    scm.selectAndServe('#step6', `let favFood = "${temp}";`);
}, '#step6');

// Step 7 Test
scm.evaluate(function () {
  let temp = favColour;

  scm.isNotBlockScope('favColour', favColour);

  try {
    favColour = null;
  } catch (err){}

  if (favColour !== null)
    throw {message: `favColour is not mutable.`};
  else
    scm.selectAndServe('#step7', `var favColour = "${temp}";`);
}, '#step7');

// Step 8 Test
scm.evaluate(function () {
  scm.isString('dob', dob);
  scm.isBlockScope('dob', dob);

  // Check if it's immutable
  try {
    dob = null;
  } catch (err){}

  if (dob === null)
    throw {message: `dob is mutable.`};
  else
    scm.selectAndServe('#step8', `const dob = "${dob}";`);
}, '#step8');

// Step 9 Test
scm.evaluate(function () {
  let temp = favNum;

  scm.isNumber('favNum', favNum);
  scm.isNotBlockScope('favNum', favNum);

  // Check if it's immutable
  try {
    favNum = null;
  } catch (err){}

  try {
    favNum = null;
  } catch (err){}

  if (favNum !== null)
    throw {message: `favNum is not mutable.`};
  else
    scm.selectAndServe('#step9', `favNum = ${temp};`);
}, '#step9');

// Step 10 Test
scm.evaluate(function () {
  scm.isBoolean('q', q);
  scm.isBlockScope('q', q);

  if (q !== true)
    throw {message: "There is an error with your comparison."}
  else
    scm.selectAndServe('#step10', `let q = 5 == "5";`);
}, '#step10');

// Step 11 Test
scm.evaluate(function () {
  scm.isBoolean('w', w);
  scm.isBlockScope('w', w);

  if (w !== true)
    throw {message: "There is an error with your comparison."}
  else
    scm.selectAndServe('#step11', `let w = 7 > 3;`);
}, '#step11');

// Step 12 Test
scm.evaluate(function () {
  scm.isBoolean('e', e);
  scm.isBlockScope('e', e);

  if (e !== true)
    throw {message: "There is an error with your comparison."}
  else
    scm.selectAndServe('#step12', `let e = "Shaun" != "Bob";`);
}, '#step12');

// Step 13 Test
scm.evaluate(function () {
  scm.isBoolean('r', r);
  scm.isBlockScope('r', r);

  if (r !== false)
    throw {message: "There is an error with your comparison."}
  else
    scm.selectAndServe('#step13', `let r = 5 === "5";`);
}, '#step13');

// Step 14 Test
scm.evaluate(function () {
  scm.isBoolean('t', t);
  scm.isBlockScope('t', t);

  if (t !== true)
    throw {message: "There is an error with your comparison."}
  else
    scm.selectAndServe('#step14', `let t = expa1 && expa2;`);
}, '#step14');

// Step 15 Test
scm.evaluate(function () {
  scm.isBoolean('y', y);
  scm.isBlockScope('y', y);

  if (y !== true)
    throw {message: "There is an error with your comparison."}
  else
    scm.selectAndServe('#step15', `let y = expb1 || expb2;`);
}, '#step15');

// Step 16 Test
scm.evaluate(function () {
  scm.isNumber('ourTestNum', ourTestNum);
  scm.isBlockScope('ourTestNum', ourTestNum);

  if (ourTestNum === 10 || ourTestNum === 20 || ourTestNum !== 15)
    throw {message: `Check your comparison operator. ourTestNum should not be equal to ${ourTestNum}`};
  else
    document.querySelector('#step16 > .hide').classList.remove('hide');
}, '#step16');

// Step 17 Test
scm.evaluate(function () {
  scm.isNumber('res', res);
  scm.isBlockScope('res', res);

  if (res === 10 || res === 20 || res === 30 || res !== 15)
    throw {message: `Check your cases. res should not be equal to ${res}`};
  else
    document.querySelector('#step17 > .hide').classList.remove('hide');
}, '#step17');

// Step 18 Test
scm.evaluate(function () {
  scm.isString('lightSwitch', lightSwitch);
  scm.isBlockScope('lightSwitch', lightSwitch);

  if (lightSwitch != 'off')
    throw {message: `You lightSwitch needs to equal 'off' not ${lightSwitch}. Check your letter case.`};
  else
    scm.selectAndServe('#step18', `lightSwitch = (lightSwitch === 'on') ? 'off' : 'on';`);
}, '#step18');