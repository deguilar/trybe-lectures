const assert = require('assert');

const formatDate = (year, month, day, hour, minute, second) => {
  return `${day}/${month}/${year} - ${hour}:${minute}:${second}`;
};

const dateInfo = ['1981', '7', '31', '22', '47', '12'];

const expectedValue = '31/7/1981 - 22:47:12';
assert.strictEqual(formatDate('1981', '7', '31', '22', '47', '12'), expectedValue);
