'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(function (value_a) {
    return collection_b.some(function (value_b) {
      return value_a % value_b == 0;
    })
  })
}

module.exports = choose_divisible_integer;
