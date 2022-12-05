const { Console } = require('@woowacourse/mission-utils');
const Validator = require('../utils/Validator');

const InputView = {
  readPurchaseAmount() {
    Console.readLine('구입금액을 입력해 주세요.', (input) => {
      Validator.validatePurchaseAmount(input);
    });
  },
};

module.exports = InputView;
