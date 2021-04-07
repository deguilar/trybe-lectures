const assert = require('assert');

const formatDate = (year, month, day, ...rest) => {
  return `${day}/${month}/${year} - ${rest}`;
};

const dateInfo = ['1981', '7', '31', '22', '47', '12'];

const expectedValue = '31/7/1981 - 22:47:12';
// assert.strictEqual(formatDate(...dateInfo), expectedValue);

console.log(formatDate(...dateInfo));
