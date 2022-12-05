const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readPurchaseAmount() {
    Console.readLine('구입금액을 입력해 주세요.', (input) => {});
  },
};

module.exports = InputView;
