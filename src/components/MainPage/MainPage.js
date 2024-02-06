import { ModalTopPlayers } from '../Modal/ModalTopPlayers/ModalTopPlayers';
import { SettingsModal } from '../Modal/SettingsModal/SettingsModal';

export class MainPage {
  constructor(changeMode, changeSound, sound) {
    this.changeMode = changeMode;
    this.changeSound = changeSound;
    this.sound = sound;
  }
  element = '';
  audio = new Audio('./sound/click-sound.mp3');

  create() {
    this.element = document.createElement('section');
  }

  render() {
    this.element.classList.add('main');
    document
      .querySelector('.app')
      .insertAdjacentElement('beforeend', this.element);
    this.element.innerHTML = `<div class="container">
                                <div class="main__container">
                                  <h1 class="main__title">NONOGRAMS</h1>
                                    <div class="main__buttons">
                                      <a href="#difficulty" class="main__button btn">Играть</a>
                                      <a href="#nonogram-${this.getRandomId()}" class="main__button btn">Случайная игра</a>
                                      <a href="#main" class="main__button main__button--top btn">Топ 5</a>
                                      <a href="#main" class="main__button main__button--settings btn">Настройки</a>
                                    </div>
                                </div>
                              </div>`;
    this.drowLastGame();
    if (this.sound) {
      document.querySelectorAll('.btn').forEach((item) =>
        item.addEventListener('click', () => {
          this.audio.preload = 'auto';
          this.audio.play();
        })
      );
    }
    document
      .querySelector('.main__button--settings')
      .addEventListener('click', this.drowSettingsModal);
    document
      .querySelector('.main__button--top')
      .addEventListener('click', this.drowTopModal);
  }
  drowTopModal() {
    new ModalTopPlayers().init();
  }
  drowSettingsModal = () => {
    new SettingsModal(this.handleChangeMode, this.handleChangeSound).init();
  };
  getRandomId() {
    const max = JSON.parse(localStorage.getItem('state')).nonograms.length - 1;
    let id = Math.floor(0 + Math.random() * (max + 1 - 0));
    if (
      JSON.parse(localStorage.getItem('state')).nonograms[id].isResolved ===
      true
    ) {
      return this.getRandomId();
    } else {
      return id;
    }
  }

  handleChangeMode = () => {
    this.changeMode();
    this.drowSettingsModal();
  };
  handleChangeSound = () => {
    this.changeSound();
    this.drowSettingsModal();
  };
  drowLastGame() {
    const id = JSON.parse(localStorage.getItem('lastGame'));
    if (id !== null) {
      document
        .querySelector('.main__buttons')
        .insertAdjacentHTML(
          'beforeend',
          `<a href="#nonogram-${id}" class="main__button main__button--settings btn">Продолжить игру</a>`
        );
    }
  }

  init() {
    this.create();
    this.render();
  }
}
