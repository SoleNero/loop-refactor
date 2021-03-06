'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/


module.exports = {

  sum: (arr, base) => {
    let sum = base;
    return sum = arr.reduce(function(arr, b){
      return arr + b;
    }, base);
  },

  someObjsContainProp: (arr, prop) => {
    return arr.some(function(arrProp){
        if(arrProp.hasOwnProperty(prop)){
          return true;
        }else{
          return false;
        }
    });
  },

  convertNameArrayToObject: (arr) => {
    let nameObj = arr.map(element => {
      let obj = {first: element[0], last: element[1]};
      return obj;
    })
    return nameObj;
  },

  objContainsProp: (arr, prop) => {
    return arr.every(function(element) {
      if(!element.hasOwnProperty(prop)){
          return false;
        }else{
          return true;
        }
    });
},

  stringMatch: (arr, str) => {
    return arr.filter(element =>{
      return element.includes(str);
    })
  },
};