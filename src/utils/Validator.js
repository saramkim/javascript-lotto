const Validator = {
  validatePurchaseAmount(input) {
    if (isNaN(input)) throw new Error('구입 금액은 숫자를 입력해야 합니다.');
    if (input % 1000 !== 0 || input === 0)
      throw new Error('구입 금액은 1,000 단위로 입력해야 합니다.');
  },
};

module.exports = Validator;
