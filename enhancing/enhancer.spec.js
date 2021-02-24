const enhancer = require('./enhancer.js');
// test away!

describe('tests', () => {
  let item = {
    name: 'ray gun',
    durability: 100,
    enhancement: 0,
  };

  it('adds 1 to enhancement level and stops at 20', () => {
    expect(enhancer.success(item)).toBeInstanceOf(Object);
    enhancer.success(item);
    expect(item.enhancement === item.enhancement + 1);
    if (item.enhancement === 20) {
      expect(item.enhancement === item.enhancement);
    }
  });
  it('does its thing with a failed enhancement', () => {
    expect(enhancer.fail(item)).toBeInstanceOf(Object);
    enhancer.fail(item);
    expect(item.durability === 95);
    if (item.enhancement < 15) {
      expect(item.durability === item.durability - 5);
    } else if (item.enhancement > 15) {
      expect(item.durability === item.durability - 10);
    } else if (item.enhancement > 16) {
      expect(item.enhancement === item.enhancement - 1);
    }
  });
  it('restores durability', () => {
    expect(enhancer.repair(item)).toBeInstanceOf(Object);
    enhancer.repair(item);
    expect(item.durability).toEqual(100);
  });
});
