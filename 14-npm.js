// npm - global comman, comes with node
// npm --version

//local dependency - use it only in this particular project
//npm i <packagaeName>

//global dependency - use it in any project
//npm instll -g <packageName>

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
