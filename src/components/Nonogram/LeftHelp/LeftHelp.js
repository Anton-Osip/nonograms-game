export class LeftHelp {
  constructor(nonogram) {
    this.nonogram = nonogram;
  }
  helpLeft;
  maxLengthSubArr = 0;
  render() {
    document.querySelector('.nonogram__left-help').innerHTML = '';
    const tbody = document.createElement('tbody');
    tbody.classList.add('left-help__tbody');
    for (let i = 0; i < this.helpLeft.length; i += 1) {
      const tr = document.createElement('tr');
      tr.classList.add('left-help__row');
      if ((i + 1) % 5 === 0) {
        tr.classList.add('left-help--borderBottom');
      }
      let count = this.maxLengthSubArr;
      for (let j = 0; j < this.maxLengthSubArr; j += 1) {
        const td = document.createElement('td');
        td.classList.add('left-help__cell');
        td.classList.add('nonogram__cell');
        if (this.helpLeft[i].length >= count) {
          td.innerHTML = `${this.helpLeft[i][count - 1]}`;
        } else {
          td.classList.add('left-help__cell--empty');
        }
        count -= 1;
        tr.insertAdjacentElement('beforeend', td);
      }
      tbody.insertAdjacentElement('beforeend', tr);
    }
    document
      .querySelector('.nonogram__left-help')
      .insertAdjacentElement('beforeend', tbody);
  }

  creatArrHelpLeft = () => {
    const sizeY = Number(this.nonogram.size.split('x')[1]);
    let arr = [];
    for (let i = 0; i < sizeY; i++) {
      arr.push([]);
    }
    const field = this.nonogram.field;

    for (let i = 0; i < field.length; i++) {
      let subArr = 0;
      for (let j = 0; j < field[i].length; j++) {
        if (field[i][j] === 'filled') {
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
    this.helpLeft = arr;
  };

  init() {
    this.creatArrHelpLeft();
    this.render();
  }
}
