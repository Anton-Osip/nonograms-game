import './sass/main.scss';
import { App } from './components/App.js';
import { State } from './state/state';

class Root {
  element = '';

  create() {
    this.element = document.createElement('div');
  }
  render() {
    this.element.classList.add('root');
    document.body.appendChild(this.element);
  }

  creatModal() {
    this.element = document.createElement('div');
  }
  renderModal() {
    this.element.classList.add('modal');
    document.body.appendChild(this.element);
  }
  changeMode = () => {
    const state = JSON.parse(localStorage.getItem('state'));
    if (state.settings.dark) {
      state.settings.dark = false;
    } else {
      state.settings.dark = true;
    }
    localStorage.setItem('state', JSON.stringify(state));
    this.init();
  };
  changeSound = () => {
    const state = JSON.parse(localStorage.getItem('state'));
    if (state.settings.sound) {
      state.settings.sound = false;
    } else {
      state.settings.sound = true;
    }
    localStorage.setItem('state', JSON.stringify(state));
    this.init();
  };

  init() {
    document.querySelector('body').innerHTML = '';
    this.create();
    this.render();
    this.creatModal();
    this.renderModal();
    if (window.location.hash === '') {
      window.location.hash = 'main';
    }
    new App(window.location.hash, this.changeMode, this.changeSound).init();
  }
}

if (window.localStorage.getItem('state') === null) {
  window.localStorage.setItem('state', JSON.stringify(State));
}

new Root().init();

window.addEventListener('hashchange', () => {
  new Root().init();
});
