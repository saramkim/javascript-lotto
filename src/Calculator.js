class Calculator {
  rank(lotto, winningNumber, bonusNumber) {
    const matchCount = lotto.matchCount(winningNumber);
    return {
      3: 'FIFTH',
      4: 'FOURTH',
      5: lotto.contains(bonusNumber) ? 'SECOND' : 'THIRD',
      6: 'FIRST',
    }[matchCount];
  }
}

module.exports = Calculator;
