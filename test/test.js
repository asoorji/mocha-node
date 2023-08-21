// test/test.js
const assert = require('assert');

describe('Basic Math', function() {
  it('should return 2 when adding 1 and 1', function() {
    assert.equal(1 + 1, 2);
  });

  it('should return 4 when multiplying 2 and 2', function() {
    assert.equal(2 * 2, 4);
  });
});
