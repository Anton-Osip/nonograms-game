import { farmatTime } from '../../../utils/FarmatTime';

export class Timer {
  constructor(nonogram) {
    this.nonogram = nonogram;
  }
  element = '';

  create() {
    this.element = document.createElement('div');
  }

  render() {
    if (document.querySelector('.timer')) {
      this.element.innerHTML = '';
    }
    this.element.classList.add('timer');
    document
      .querySelector('.header__container')
      .insertAdjacentElement('beforeend', this.element);
    this.element.innerHTML = `${this.nonogram.timer.time}`;
    this.drowTime();
  }
  drowTime = () => {
    document.querySelector('.timer').innerHTML = '';
    document.querySelector('.timer').innerHTML = `${farmatTime(
      this.nonogram.timer.time
    )}`;
  };

  init() {
    this.create();
    this.render();
    farmatTime();
  }
}
