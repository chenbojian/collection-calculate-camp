'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var step = number_a > number_b ? -1 : 1;
  var number = number_a;
  var list = [];
  list.push(number);
  while (number != number_b) {
    number += step;
    list.push(number);
  }
  return list.map(function (value, index, arr) {
    var converstion = 'a'.charCodeAt(0) - 1;
    return String.fromCharCode(value + converstion);
  });

}

module.exports = get_letter_interval;
