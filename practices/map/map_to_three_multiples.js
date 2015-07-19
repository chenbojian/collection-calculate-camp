'use strict';
function multiple3(value) {
  return 3 * value;
}
var map_to_three_multiples = function (collections) {
  return collections.map(multiple3);
};

module.exports = map_to_three_multiples;
