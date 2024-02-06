import { farmatTime } from '../../../utils/FarmatTime';
export class ModalTopPlayers {
  top = JSON.parse(localStorage.getItem('state')).winGame.sort(
    (a, b) => a.time - b.time
  );
  create() {
    this.element = document.createElement('div');
  }

  render() {
    console.log(this.top);
    let str = '';
    if (this.top.length === 0) {
      str = `<h1 class="top__empty">Список лучших игр пуст <br> Пройдите уровень</h1>`;
    } else {
      this.top.forEach((item, index) => {
        if (index < 5)
          str += `<div class="top__link">
                <img class="top__picter" src="${item.href}">
                <h3 class="top__name">${item.name}</h3>
                <p class="top__size">${item.size}</p>
                <p class="top__size"> Время прохождения: ${farmatTime(
                  item.time
                )}</p>
              </div>`;
      });
    }

    document.querySelector('.modal').innerHTML = '';
    this.element.classList.add('pupup');
    document
      .querySelector('.modal')
      .insertAdjacentElement('beforeend', this.element);
    this.element.innerHTML = `
                              <div class="popup">
                                <div class="popup__wrapper">
                                  <div class="popup__inner">
                                    <div class="popup__content top">
                                    ${str}
                                    </div>
                                  </div>
                                </div>
                              </div>
    `;

    document
      .querySelector('.popup__inner')
      .addEventListener('click', this.clouseModal);
  }

  clouseModal = (event) => {
    if (event.target.classList.value === 'popup__inner') {
      document.querySelector('.modal').innerHTML = '';
    }
  };

  init() {
    this.create();
    this.render();
  }
}
