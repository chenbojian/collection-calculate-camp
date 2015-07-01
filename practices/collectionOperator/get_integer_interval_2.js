'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var step = number_a > number_b ? -1 : 1;
  var number = number_a;
  var list = [];
  list.push(number);
  while (number != number_b){
    number += step;
    list.push(number);
  }
  return list.filter(function(value,index,arr) {
    return value % 2 == 0;
  });
}

module.exports = get_integer_interval_2;
