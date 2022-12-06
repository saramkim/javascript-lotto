const { Console } = require('@woowacourse/mission-utils');
const Validator = require('../utils/Validator');

const InputView = {
  readPurchaseAmount(game) {
    Console.readLine('구입금액을 입력해 주세요.', (input) => {
      Validator.validatePurchaseAmount(input);
      game.purchase(input);
    });
  },

  readWinningNumber(game) {
    Console.readLine('당첨 번호를 입력해 주세요.', (input) => {
      Validator.validateWinningNumber(input);
      game.record(input)
    });
  },

  readBonusNumber(game) {
    Console.readLine('보너스 번호를 입력해 주세요.', (input) => {
      Validator.validateBonusNumber(input);
    });
  },
};

module.exports = InputView;
