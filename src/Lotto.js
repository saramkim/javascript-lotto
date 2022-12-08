class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    numbers.forEach((number) => {
      if (number < 1 || number > 45)
        throw new Error('[ERROR] 로또 번호는 1~45 범위의 숫자여야 합니다.');
    });
  }

  getNumber() {
    return this.#numbers;
  }

  matchCount(numbers) {
    let count = 0;

    this.#numbers.forEach((number) => {
      if (numbers.includes(number)) count++;
    });

    return count;
  }

  contains(number) {
    return this.#numbers.includes(number);
  }
}

module.exports = Lotto;
