'use strict';
function number_to_word(number) {
  return String.fromCharCode(number + 65 - 1);
}
var number_map_to_word = function(collection){
  return collection.map(number_to_word);
};

module.exports = number_map_to_word;
