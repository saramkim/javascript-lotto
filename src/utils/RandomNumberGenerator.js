const { Random } = require('@woowacourse/mission-utils');

const RandomNumberGenerator = {
  RANDOM_LOWER_INCLUSIVE: 1,
  RANDOM_UPPER_INCLUSIVE: 45,
  LOTTO_NUMBER_COUNT: 6,

  generate() {
    return Random.pickUniqueNumbersInRange(
      RandomNumberGenerator.RANDOM_LOWER_INCLUSIVE,
      RandomNumberGenerator.RANDOM_UPPER_INCLUSIVE,
      RandomNumberGenerator.LOTTO_NUMBER_COUNT
    );
  },
};

module.exports = RandomNumberGenerator;
