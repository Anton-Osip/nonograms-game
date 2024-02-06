import { farmatTime } from '../../utils/FarmatTime';
export class Modal {
  constructor(nonogram) {
    this.nonogram = nonogram;
  }
  create() {
    this.element = document.createElement('div');
  }

  render() {
    document.querySelector('.modal').innerHTML = '';
    this.element.classList.add('pupup');
    document
      .querySelector('.modal')
      .insertAdjacentElement('beforeend', this.element);
    this.element.innerHTML = `
                              <div class="popup">
                                <div class="popup__wrapper">
                                  <div class="popup__inner">
                                    <div class="popup__content">
                                      <p class="popup__text">Поздравляем!</p>
                                      <p class="popup__text">Уровень пройден:</p>
                                      <h3 class="popup__name">${
                                        this.nonogram.name
                                      }</h3>
                                        <img class="popup__picter" src="${
                                          this.nonogram.href
                                        }">

                                        <p class="popup__size">${
                                          this.nonogram.size
                                        }</p>
                                        <p class="popup__time"> Время прохождения: ${farmatTime(
                                          this.nonogram.timer.time
                                        )}</p>
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
