const Lotto = require('./Lotto');

const LottoMaker = {
  LOTTO_NUMBER_COUNT: 6,

  makeLotto(randomNumberGenerator) {
    const lottoNumber = [];

    while (lottoNumber.length < LottoMaker.LOTTO_NUMBER_COUNT) {
      const randomNumber = randomNumberGenerator();
      if (!lottoNumber.includes(randomNumber)) lottoNumber.push(randomNumber);
    }

    new Lotto(lottoNumber);
  },
};

module.exports = LottoMaker;
