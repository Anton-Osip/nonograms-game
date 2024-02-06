import { TopHelp } from './TopHelp/TopHelp';
import { LeftHelp } from './LeftHelp/LeftHelp';
import { Field } from './Field/Field';
import { Header } from '../Header/Header';
import { Timer } from '../Header/Timer/Timer';

export class Nonogram {
  constructor(sound) {
    this.sound = sound;
  }
  drowAudio = new Audio('./sound/drow-sound.mp3');

  element = '';
  nonogram;
  sizeY;
  sizeX;
  userField = [];
  notWin = false;
  create() {
    this.element = document.createElement('section');
  }

  render() {
    document.querySelector('.app').innerHTML = '';
    this.element.classList.add('nonogram');
    document
      .querySelector('.app')
      .insertAdjacentElement('beforeend', this.element);
    this.element.innerHTML = `<div class="container">
                                <div class="nonogram__container">
                                  <table class="nonogram__table">
                                    <tbody class="nonogram__tbody">
                                      <tr class="nonogram__tr">
                                        <td class="nonogram__td nonogram__td--empty"></td>
                                        <td class="nonogram__td">
                                          <table class="nonogram__top-help top-help"></table>
                                        </td>
                                      </tr>
                                      <tr class="nonogram__tr">
                                        <td class="nonogram__td">
                                          <table class="nonogram__left-help left-help"></table>
                                        </td>
                                        <td class="nonogram__td">
                                          <table class="nonogram__field field"></table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>`;
  }
  timerStart = () => {
    this.nonogram.timer.onPouse = false;
    this.nonogram.timer.setTime = setInterval(this.addSec, 1000);
  };
  timerOnPouse = () => {
    this.nonogram.timer.onPouse = true;
    clearInterval(this.nonogram.timer.setTime);
  };
  addSec = () => {
    this.nonogram.timer.time += 1;
    new Timer(this.nonogram).drowTime();
  };
  drowTopHelp() {
    new TopHelp(this.nonogram).init();
  }
  drowLeftHelp() {
    new LeftHelp(this.nonogram).init();
  }
  drowField() {
    if (this.sound && !this.nonogram.isResolved) {
      this.drowAudio.preload = 'auto';
      this.drowAudio.play();
    }
    new Field(
      this.nonogram,
      this.userField,
      this.timerStart,
      this.timerOnPouse,
      this.sound,
      this.notWin
    ).init();
  }
  creatUserField() {
    if (this.nonogram.userField) {
      this.userField = this.nonogram.userField;
    } else {
      this.userField = [];
      const size = parseInt(this.nonogram.size);
      for (let i = 0; i < size; i += 1) {
        this.userField.push([]);
        for (let j = 0; j < size; j += 1) {
          this.userField[i].push('empty');
        }
      }
    }
  }
  drowHeader() {
    const href = `#difficulty-${this.nonogram.size}`;
    new Header(
      href,
      this.reset,
      this.save,
      this.nonogram,
      this.timerOnPouse,
      this.sound,
      this.solutions
    ).init();
  }
  reset = () => {
    this.notWin = false;
    const state = JSON.parse(localStorage.getItem('state'));
    const size = parseInt(this.nonogram.size);
    state.nonograms.forEach((item) => {
      if (item.id === this.nonogram.id) {
        this.timerOnPouse();
        item.timer = {
          setTime: () => {},
          time: 0,
          onPouse: true,
        };
        item.isResolved = false;
        item.userField = [];
        for (let i = 0; i < size; i += 1) {
          item.userField.push([]);
          for (let j = 0; j < size; j += 1) {
            item.userField[i].push('empty');
          }
        }
      }
    });
    localStorage.setItem('state', JSON.stringify(state));
    this.init();
  };
  solutions = () => {
    this.notWin = true;
    this.drowField();
  };
  save = () => {
    this.notWin = false;
    const state = JSON.parse(localStorage.getItem('state'));
    state.nonograms.forEach((item) => {
      if (item.id === this.nonogram.id) {
        this.nonogram.timer.onPouse = true;
        item.timer = this.nonogram.timer;
        item.userField = this.userField;
      }
    });
    localStorage.setItem('state', JSON.stringify(state));
    localStorage.setItem('lastGame', JSON.stringify(this.nonogram.id));
  };

  init() {
    const state = JSON.parse(window.localStorage.getItem('state'));
    const id = window.location.hash.split('-')[1];

    this.nonogram = state.nonograms[id];
    this.sizeY = Number(this.nonogram.size.split('x')[1]);
    this.sizeX = Number(this.nonogram.size.split('x')[0]);
    this.creatUserField();
    this.create();
    this.render();
    this.drowTopHelp();
    this.drowLeftHelp();
    this.drowField();
    this.drowHeader();
  }
}
