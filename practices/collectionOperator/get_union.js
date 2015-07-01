'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.concat(collection_b.filter(function(value) {
    return collection_a.indexOf(value) == -1;
  }));
}

module.exports = get_union;

