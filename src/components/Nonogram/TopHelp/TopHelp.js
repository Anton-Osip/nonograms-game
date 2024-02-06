export class TopHelp {
  constructor(nonogram) {
    this.nonogram = nonogram;
  }
  helpTop;
  maxLengthSubArr = 0;
  render() {
    document.querySelector('.nonogram__top-help').innerHTML = '';
    const tbody = document.createElement('tbody');
    tbody.classList.add('top-help__tbody');
    let count = this.maxLengthSubArr;
    for (let i = 0; i < this.maxLengthSubArr; i += 1) {
      const tr = document.createElement('tr');
      tr.classList.add('top-help__row');

      for (let j = 0; j < this.helpTop.length; j += 1) {
        const td = document.createElement('td');
        if ((j + 1) % 5 === 0) {
          td.classList.add('top-help--borderRight');
        }
        td.classList.add('top-help__cell');
        td.classList.add('nonogram__cell');
        if (this.helpTop[j].length >= count) {
          td.innerHTML = `${this.helpTop[j][count - 1]}`;
        } else {
          td.classList.add('top-help__cell--empty');
        }
        tr.insertAdjacentElement('beforeend', td);
      }
      count -= 1;

      tbody.insertAdjacentElement('beforeend', tr);
    }
    document
      .querySelector('.nonogram__top-help')
      .insertAdjacentElement('beforeend', tbody);
  }

  creatArrHelpTop = () => {
    const sizeX = Number(this.nonogram.size.split('x')[0]);
    let arr = [];
    for (let i = 0; i < sizeX; i++) {
      arr.push([]);
    }
    const field = this.nonogram.field;
    for (let i = 0; i < field.length; i++) {
      let subArr = 0;
      for (let j = 0; j < field[i].length; j++) {
        if (field[j][i] === 'filled') {
          subArr += 1;
        } else if (subArr !== 0) {
          arr[i].push(subArr);
          subArr = 0;
        }
      }
      if (subArr !== 0) {
        arr[i].push(subArr);
        subArr = 0;
      }
      if (arr[i].length > this.maxLengthSubArr) {
        this.maxLengthSubArr = arr[i].length;
      }
    }
    arr.map((item) => item.reverse());
    this.helpTop = arr;
  };

  init() {
    this.creatArrHelpTop();
    this.render();
  }
}
