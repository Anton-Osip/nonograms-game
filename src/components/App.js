import { MainPage } from './MainPage/MainPage';
import { Difficulty } from './Difficulty/Difficulty';
import { Nonogram } from './Nonogram/Nonogram';

export class App {
  constructor(hash, changeMode, changeSound) {
    this.hash = hash;
    this.changeMode = changeMode;
    this.changeSound = changeSound;
  }
  sound = JSON.parse(localStorage.getItem('state')).settings.sound;
  element = '';

  create() {
    if (JSON.parse(localStorage.getItem('state')).settings.dark) {
      document.querySelector('body').classList.add('dark');
    } else {
      document.querySelector('body').classList.remove('dark');
    }

    document.querySelector('.root').innerHTML = '';

    this.element = document.createElement('main');
    this.element.classList.add('app');
    document
      .querySelector('.root')
      .insertAdjacentElement('beforeend', this.element);
  }

  init() {
    this.create();

    if (this.hash === '#main')
      new MainPage(this.changeMode, this.changeSound, this.sound).init();
    if (this.hash.includes('#difficulty')) new Difficulty(this.sound).init();
    if (this.hash.includes('#nonogram')) new Nonogram(this.sound).init();
  }
}
