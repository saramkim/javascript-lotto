const Lotto = require('../src/Lotto');
const Calculator = require('../src/utils/Calculator');

describe('Calculator 객체 테스트', () => {
  test('rank 메서드 검증', () => {
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([1, 2, 3, 4, 5, 8]);
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 8;

    const ranking1 = Calculator.rank(lotto1, winningNumber, bonusNumber);
    const ranking2 = Calculator.rank(lotto2, winningNumber, bonusNumber);

    expect(ranking1).toEqual('FIRST');
    expect(ranking2).toEqual('SECOND');
  });

  test('calculatePrizeMoney 메서드 검증', () => {
    const money1 = Calculator.calculatePrizeMoney(['FIRST']);
    const money2 = Calculator.calculatePrizeMoney(['FIFTH']);

    expect(money1).toEqual(20_000_000_000);
    expect(money2).toEqual(5_000);
  });
});
