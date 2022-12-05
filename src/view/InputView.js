const { Console } = require('@woowacourse/mission-utils');
const Validator = require('../utils/Validator');

const InputView = {
  readPurchaseAmount() {
    Console.readLine('구입금액을 입력해 주세요.', (input) => {
      Validator.validatePurchaseAmount(input);
    });
  },

  readWinningNumber() {
    Console.readLine('당첨 번호를 입력해 주세요.', (input) => {
      Validator.validateWinningNumber(input);
    });
  },

  readBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.', (input) => {});
  },
};

module.exports = InputView;
