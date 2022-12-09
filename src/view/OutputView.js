const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  RESULT_PHRASE: {
    FIFTH: (count) => `3개 일치 (5,000원) - ${count}개`,
    FOURTH: (count) => `4개 일치 (50,000원) - ${count}개`,
    THIRD: (count) => `5개 일치 (1,500,000원) - ${count}개`,
    SECOND: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
    FIRST: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  },

  printPurchaseCount(count) {
    Console.print(count + '개를 구매했습니다.');
  },

  printLottoNumber(LottoNumber) {
    Console.print(`[${LottoNumber.sort((a, b) => a - b).join(', ')}]`);
  },

  printWinningHistory(result) {
    Console.print('당첨 통계');
    Console.print('---');
    Object.keys(this.RESULT_PHRASE).forEach((ranking) => {
      const count = result.filter((v) => v === ranking).length;
      Console.print(this.RESULT_PHRASE[ranking](count));
    });
  },

  printReturnRate(totalPrizeMoney, lottoAmount) {
    const ReturnRate = ((totalPrizeMoney / (lottoAmount * 1000)) * 100).toFixed(
      1
    );
    Console.print(`총 수익률은 ${ReturnRate}%입니다.`);
  },
};

module.exports = OutputView;
