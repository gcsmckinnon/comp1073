// Enables all tooltips from Bootstrap
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// Shaun Utilities
const SCM = function () {}

SCM.prototype.selectAndServe = function (selector, content, append = false) {
  let ele = document.querySelector(selector);

  if (append)
    ele.append(content);
  else
    ele.textContent = content;
}

SCM.prototype.evaluate = function (block, selector = false) {
  try {
    block();
  } catch (err) {
    console.log("ERROR:", err.message);

    if (selector)
      this.selectAndServe(selector, err.message);
  }
}

// Shaun data type eval methods
SCM.prototype.isType = function (varName, variable, type) {
  if (typeof variable !== type)
    throw {message: `${varName} is not of type ${type}. It is of type ${typeof variable}`};
}

SCM.prototype.isString = function (varName, variable) {
  this.isType(varName, variable, 'string');
}

SCM.prototype.isNumber = function (varName, variable) {
  this.isType(varName, variable, 'number');
}

SCM.prototype.isBoolean = function (varName, variable) {
  this.isType(varName, variable, 'boolean');
}

SCM.prototype.isArray = function (varName, variable) {
  this.isType(varName, variable, 'array');
}

SCM.prototype.isObject = function (varName, variable) {
  this.isType(varName, variable, 'object');
}

SCM.prototype.isFunction = function (varName, variable) {
  this.isType(varName, variable, 'function');
}

// Testing visibility
SCM.prototype.isBlockScope = function (varName, variable) {
  if (window[varName] !== undefined)
    throw {message: `${varName} is not block scoped.`};
}

SCM.prototype.isNotBlockScope = function (varName, variable) {
  if (window[varName] === undefined)
    throw {message: `${varName} is block scoped.`};
}

const scm = new SCM;