const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 1미만, 45초과의 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

  test('getNumber 메서드 검증', () => {
    expect(lotto.getNumber()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('matchCount 메서드 검증', () => {
    expect(lotto.matchCount([4, 5, 6, 7, 8, 9])).toEqual(3);
  });

  test('contains 메서드 검증', () => {
    expect(lotto.contains(4)).toEqual(true);
    expect(lotto.contains(7)).toEqual(false);
  });
});
