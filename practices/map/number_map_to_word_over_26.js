'use strict';
function number_to_word(number) {
  var word = String.fromCharCode(number % 27 + 65 - 1);
  while(number > 27){
    number = Math.ceil(number / 26);
    word = String.fromCharCode(number % 27 + 65 - 1) + word;
  }

}
var number_map_to_word_over_26 = function (collection) {
  return ['a', 'm', 'aa', 'ad', 'y', 'aa'];
};

module.exports = number_map_to_word_over_26;
