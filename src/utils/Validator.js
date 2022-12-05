const Validator = {
  PURCHASE_AMOUNT_UNIT: 1000,
  WINNIG_NUMBER_COUNT: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,

  validatePurchaseAmount(input) {
    if (isNaN(input))
      throw new Error('[ERROR] 구입 금액은 숫자를 입력해야 합니다.');
    if (input % Validator.PURCHASE_AMOUNT_UNIT !== 0 || input === 0)
      throw new Error('[ERROR] 구입 금액은 1,000 단위로 입력해야 합니다.');
  },

  validateWinningNumber(input) {
    const inputArray = input.split(',');

    if (!input.includes(','))
      throw new Error('[ERROR] 당첨 번호는 쉼표로 구분하여 입력해야 합니다.');
    if (inputArray.length !== Validator.WINNIG_NUMBER_COUNT)
      throw new Error('[ERROR] 당첨 번호는 6개를 입력해야 합니다.');

    inputArray.forEach((number) => {
      if (isNaN(number))
        throw new Error('[ERROR] 당첨 번호는 숫자를 입력해야 합니다.');
      if (number < Validator.MIN_NUMBER || number > Validator.MAX_NUMBER)
        throw new Error('[ERROR] 당첨 번호는 1~45 범위를 입력해야 합니다.');
      if ([...new Set(inputArray)].length !== Validator.WINNIG_NUMBER_COUNT)
        throw new Error(
          '[ERROR] 당첨 번호는 중복되지 않는 숫자 조합으로 입력해야 합니다.'
        );
    });
  },

  validateBonusNumber(input, winnigNumber) {
    if (isNaN(input))
      throw new Error('[ERROR] 보너스 번호는 숫자 1개를 입력해야 합니다.');
    if (winnigNumber.includes(input))
      throw new Error(
        '[ERROR] 보너스 번호는 당첨 번호와 다른 숫자를 입력해야 합니다.'
      );
    if (input < Validator.MIN_NUMBER || input > Validator.MAX_NUMBER)
      throw new Error('[ERROR] 보너스 번호는 1~45 범위를 입력해야 합니다.');
  },
};

module.exports = Validator;
