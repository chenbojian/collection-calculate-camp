'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var list = [];
  return collection.filter(function (value) {
    if (list.indexOf(value) == -1){
      list.push(value);
      return true;
    }else{
      return false;
    }

  })
}

module.exports = choose_no_repeat_number;
