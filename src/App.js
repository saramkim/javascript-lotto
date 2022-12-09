const Calculator = require('./Calculator');
const Lotto = require('./Lotto');
const RandomNumberGenerator = require('./utils/RandomNumberGenerator');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  #lottoList = [];

  play() {
    InputView.readPurchaseAmount(this);
  }

  purchase(amount) {
    const count = amount / 1000;
    OutputView.printPurchaseCount(count);

    this.makeLotto(count);

    InputView.readWinningNumber(this);
  }

  makeLotto(count) {
    for (let i = 0; i < count; i++) {
      const lottoNumber = RandomNumberGenerator.generate();
      const lotto = new Lotto(lottoNumber);
      this.#lottoList.push(lotto);

      OutputView.printLottoNumber(lotto.getNumber());
    }
  }

  record(input) {
    const winningNumber = input.split(',').map((number) => Number(number));

    InputView.readBonusNumber(this, winningNumber);
  }

  calculate(winningNumber, bonusNumber) {
    const result = [];
    let totalPrizeMoney = 0;
    this.#lottoList.forEach((lotto) => {
      const ranking = Calculator.rank(lotto, winningNumber, bonusNumber);
      if (ranking) {
        result.push(ranking);
        totalPrizeMoney += Calculator.calculatePrizeMoney(ranking);
      }
    });
    OutputView.printWinningHistory(result);
    OutputView.printReturnRate(totalPrizeMoney, this.#lottoList.length);
  }
}

module.exports = App;
