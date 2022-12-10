const Calculator = {
  PRIZE_MONEY: {
    FIFTH: 5_000,
    FOURTH: 50_000,
    THIRD: 1_500_000,
    SECOND: 30_000_000,
    FIRST: 20_000_000_000,
  },

  rank(lotto, winningNumber, bonusNumber) {
    const matchCount = lotto.matchCount(winningNumber);
    return {
      3: 'FIFTH',
      4: 'FOURTH',
      5: lotto.contains(bonusNumber) ? 'SECOND' : 'THIRD',
      6: 'FIRST',
    }[matchCount];
  },

  calculatePrizeMoney(ranking) {
    return this.PRIZE_MONEY[ranking];
  },
};

module.exports = Calculator;
