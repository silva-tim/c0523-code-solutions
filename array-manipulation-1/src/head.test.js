/* global expect, banMethods, head */

describe('head(array)', function () {
  beforeEach(function () {
    expect(head).to.be.a('function');
    banMethods(head, 'slice', 'splice', 'pop', 'shift', 'filter');
  });

  it('returns "foo" for ["foo", "bar", "baz"]', function () {
    const input = ['foo', 'bar', 'baz'];
    const output = head(input);
    expect(output).to.equal('foo');
  });

  it('returns 1 for [1, 2, 3, 4, 5]', function () {
    const input = [1, 2, 3, 4, 5];
    const output = head(input);
    expect(output).to.equal(1);
  });

  it('returns false for [false, true, false, true]', function () {
    const input = [false, true, false, true];
    const output = head(input);
    expect(output).to.equal(false);
  });

  it('returns undefined for [] (empty arrays)', function () {
    const input = [];
    const output = head(input);
    expect(output).to.equal(undefined);
  });
});
