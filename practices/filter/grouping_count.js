'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var dict = {};
  collection.forEach(function (value) {
    if (dict[value.toString()] == undefined){
      dict[value.toString()] = 1;
    }else{
      dict[value.toString()]++;
    }
  });
  return dict;
}

module.exports = grouping_count;
