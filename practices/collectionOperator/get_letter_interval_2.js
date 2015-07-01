'use strict';
function number_to_string(number) {
  var converstion = 'a'.charCodeAt(0) - 1;
  var charCode = number % 26 == 0 ? 26 + converstion : number % 26 + converstion;
  var str = String.fromCharCode(charCode);
  while (Math.ceil(number / 26) - 1 != 0) {
    number = Math.ceil(number / 26) - 1;
    charCode = number % 26 == 0 ? 26 + converstion : number % 26 + converstion;
    str = String.fromCharCode(charCode) + str;
  }
  return str;
}
function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var step = number_a > number_b ? -1 : 1;
  var number = number_a;
  var list = [];
  list.push(number);
  while (number != number_b) {
    number += step;
    list.push(number);
  }
  return list.map(number_to_string);
}

module.exports = get_letter_interval_2;

