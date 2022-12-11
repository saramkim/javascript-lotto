const Validator = require('../src/utils/Validator');

describe('Validator 객체 테스트', () => {
  test('구입 금액이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Validator.validatePurchaseAmount('삼천');
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 1,000 단위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Validator.validatePurchaseAmount('500');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호를 쉼표로 구분하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      Validator.validateWinningNumber('1 2 3 4 5 6');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호의 개수가 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Validator.validateWinningNumber('1, 2, 3, 4, 5, 6, 7');
    }).toThrow('[ERROR]');
    expect(() => {
      Validator.validateWinningNumber('1, 2, 3, 4, 5');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Validator.validateWinningNumber('일, 이, 삼, 사, 오, 육');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 1미만, 45초과의 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      Validator.validateWinningNumber('1, 2, 3, 4, 5, 66');
    }).toThrow('[ERROR]');
    expect(() => {
      Validator.validateWinningNumber('-1, 2, 3, 4, 5, 6');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      Validator.validateWinningNumber('1, 2, 3, 4, 5, 5');
    }).toThrow('[ERROR]');
  });

  const winnigNumber = ['1', '2', '3', '4', '5', '6'];

  test('보너스 번호의 개수가 1개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Validator.validateBonusNumber('1, 2', winnigNumber);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 중복된 숫자면 예외가 발생한다.', () => {
    expect(() => {
      Validator.validateBonusNumber('1', winnigNumber);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1미만, 45초과이면 예외가 발생한다.', () => {
    expect(() => {
      Validator.validateBonusNumber('0', winnigNumber);
    }).toThrow('[ERROR]');
    expect(() => {
      Validator.validateBonusNumber('46', winnigNumber);
    }).toThrow('[ERROR]');
  });
});
