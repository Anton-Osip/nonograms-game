import { Modal } from '../../Modal/Modal';

export class Field {
  constructor(nonogram, userField, timerStart, timerOnPouse, sound, notWin) {
    this.nonogram = nonogram;
    this.userField = userField;
    this.timerStart = timerStart;
    this.timerOnPouse = timerOnPouse;
    this.sound = sound;
    this.notWin = notWin;
  }
  crossAudio = new Audio('./sound/cross-sound.mp3');
  eraserAudio = new Audio('./sound/eraser-sound.mp3');
  fillAudio = new Audio('./sound/fill-sound.mp3');
  winAudio = new Audio('./sound/win.mp3');
  win = false;

  render() {
    document.querySelector('.nonogram__field').innerHTML = '';
    const tbody = document.createElement('tbody');
    tbody.classList.add('field__tbody');
    this.userField.forEach((subItem, indexRow) => {
      const tr = document.createElement('tr');
      tr.classList.add('field__row');
      subItem.forEach((item, indexColum) => {
        const td = document.createElement('td');
        td.dataset.path = `${indexRow}-${indexColum}`;
        td.classList.add('field__cell');
        td.classList.add('nonogram__cell');
        td.dataset.path = `${indexRow}-${indexColum}`;
        if ((indexColum + 1) % 5 === 0 && indexColum !== 0)
          td.classList.add('field--borderRight');

        if ((indexRow + 1) % 5 === 0 && indexRow !== 0)
          td.classList.add('field--borderBottom');

        if (item === 'filled') td.classList.add('field--fill');
        if (item === 'cross') td.classList.add('field--cross');
        tr.insertAdjacentElement('beforeend', td);
      });
      tbody.insertAdjacentElement('beforeend', tr);
    });
    document
      .querySelector('.nonogram__field')
      .insertAdjacentElement('beforeend', tbody);

    document
      .querySelector('.field__tbody')
      .addEventListener('click', this.isField);
    document
      .querySelector('.field__tbody')
      .addEventListener('contextmenu', this.isCross);
  }

  hendleTimerStart = () => {
    if (this.nonogram.timer.onPouse) {
      this.timerStart();
    }
  };

  isCross = (event) => {
    event.preventDefault();
    if (this.win) return;
    if (this.nonogram.isResolved) return;
    if (this.notWin) return;
    this.hendleTimerStart();
    if (!event.target.classList.contains('field__cell')) return;
    let x = Number(event.target.getAttribute('data-path').split('-')[0]);
    let y = Number(event.target.getAttribute('data-path').split('-')[1]);
    if (this.userField[x][y] === 'cross') {
      this.playSound('eraser', this.sound);
      this.userField[x][y] = 'empty';
    } else if (this.userField[x][y] !== 'cross') {
      this.playSound('cross', this.sound);
      this.userField[x][y] = 'cross';
    }
    if (!this.notWin) this.isWinn();
    this.render();
  };
  isField = (event) => {
    if (this.nonogram.isResolved) return;
    if (this.win) return;
    if (this.notWin) return;
    this.hendleTimerStart();
    if (!event.target.classList.contains('field__cell')) return;
    let x = Number(event.target.getAttribute('data-path').split('-')[0]);
    let y = Number(event.target.getAttribute('data-path').split('-')[1]);
    if (event.button === 0) {
      if (this.userField[x][y] === 'filled') {
        this.playSound('eraser', this.sound);
        this.userField[x][y] = 'empty';
      } else if (this.userField[x][y] !== 'filled') {
        this.playSound('fill', this.sound);
        this.userField[x][y] = 'filled';
      }
    }
    if (!this.notWin) this.isWinn();
    this.render();
  };

  drowModal() {
    new Modal(this.nonogram).init();
  }

  isEven() {
    const myUserField = [];
    const length = this.userField.length;

    for (let i = 0; i < length; i += 1) {
      myUserField.push([]);
      for (let j = 0; j < length; j += 1) {
        if (this.userField[i][j] === 'cross') {
          myUserField[i].push('empty');
        } else {
          myUserField[i].push(this.userField[i][j]);
        }
      }
    }
    return myUserField.toString() === this.nonogram.field.toString();
  }

  isWinn = () => {
    const id = JSON.parse(window.localStorage.getItem('lastGame'));
    const state = JSON.parse(window.localStorage.getItem('state'));
    state.nonograms.forEach((item) => {
      if (item.id === this.nonogram.id) {
        if (this.isEven()) {
          this.timerOnPouse();
          item.timer = this.nonogram.timer;
          item.isResolved = true;
          item.userField = this.userField;
          this.win = true;

          let winGame = {
            id: item.id,
            name: item.name,
            size: item.size,
            time: item.timer.time,
            href: item.href,
          };
          if (state.winGame.length > 4) state.winGame.shift();
          state.winGame.push(winGame);
          localStorage.setItem('state', JSON.stringify(state));
          this.drowModal();
          this.playSound('win', this.sound);
          if (id === item.id) {
            localStorage.setItem('lastGame', null);
          }
        }
      }
    });
  };

  playSound(audio, sound) {
    if (!sound) return;
    switch (audio) {
      case 'cross':
        this.crossAudio.preload = 'auto';
        this.crossAudio.play();
        break;
      case 'eraser':
        this.eraserAudio.preload = 'auto';
        this.eraserAudio.play();
        break;
      case 'fill':
        this.fillAudio.preload = 'auto';
        this.fillAudio.play();
        break;
      case 'win':
        if (!this.nonogram.isResolved) {
          this.winAudio.preload = 'auto';
          this.winAudio.play();
        }
        break;

      default:
        break;
    }
  }

  init() {
    if (this.notWin) {
      this.userField = this.nonogram.field;
    }
    this.render();
  }
}
