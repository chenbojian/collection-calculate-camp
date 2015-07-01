'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var arr = [];
  collection.forEach(function (value) {
    if (Array.isArray(value)) {
      value.forEach(function (value_2) {
        if (arr.indexOf(value_2) == -1) {
          arr.push(value_2);
        }
      })
    } else {
      if (arr.indexOf(value) == -1) {
        arr.push(value);
      }
    }
  });
  return arr;
}

module.exports = double_to_one;
