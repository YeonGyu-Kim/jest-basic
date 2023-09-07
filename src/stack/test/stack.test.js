const Stack = require('../stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.size()).toBe(0);
  });

  it('allows to push item', () => {
    stack.push('a');
    expect(stack.size()).toBe(1);
  });

  describe('pop', () => {
    it('stack이 비어있으면 error 호출', () => {
      expect(() => {
        stack.pop();
      }).toThrow('Stack is empty');
    });

    it('마지막 값 리턴 및 제거', () => {
      stack.push('a');
      stack.push('b');
      expect(stack.pop()).toBe('b');
      expect(stack.size()).toBe(1);
    });
  });

  describe('peek', () => {
    it('stack이 비어있으면 error 호출', () => {
      expect(() => {
        stack.pop();
      }).toThrow('Stack is empty');
    });

    it('마지막 값 리턴 및 유지', () => {
      stack.push('a');
      stack.push('b');
      expect(stack.peek()).toBe('b');
      expect(stack.size()).toBe(2);
    });
  });
});
