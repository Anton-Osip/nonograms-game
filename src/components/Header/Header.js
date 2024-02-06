import { Timer } from './Timer/Timer';
const back = `<svg class="icon" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet">
  <path  d="M34 3H12.475V1.128c0-1.046-.74-1.435-1.645-.865L.69 6.652c-.905.57-.922 1.527-.038 2.127l10.215 6.931c.884.602 1.607.235 1.607-.811V13H34a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM.024 26.184c0-.727.5-1.137 1.197-1.137H4.13c1.576 0 2.849 1.061 2.849 2.667c0 1.061-.439 1.772-1.409 2.227v.03c1.288.183 2.303 1.258 2.303 2.576c0 2.137-1.424 3.288-3.516 3.288h-3.12c-.697 0-1.212-.439-1.212-1.151v-8.5zm2.273 3.135h1.182c.742 0 1.227-.439 1.227-1.196c0-.713-.561-1.076-1.227-1.076H2.297v2.272zm0 4.516h1.788c.818 0 1.424-.47 1.424-1.318c0-.712-.545-1.197-1.606-1.197H2.297v2.515zm9.217-7.713c.258-.696.85-1.257 1.621-1.257c.805 0 1.365.53 1.621 1.257l2.971 8.243c.092.242.121.454.121.561c0 .591-.484 1-1.045 1c-.637 0-.955-.333-1.107-.788l-.453-1.424H11.03l-.455 1.409c-.15.47-.469.803-1.09.803c-.607 0-1.122-.454-1.122-1.061c0-.242.076-.424.106-.5l3.045-8.243zm.168 5.501h2.879l-1.41-4.395h-.029l-1.44 4.395zm11.378-6.758c1.106 0 3.258.363 3.258 1.696c0 .546-.379 1.016-.94 1.016c-.621 0-1.046-.53-2.318-.53c-1.879 0-2.849 1.591-2.849 3.439c0 1.803.985 3.349 2.849 3.349c1.272 0 1.788-.637 2.409-.637c.682 0 1 .682 1 1.03c0 1.455-2.288 1.788-3.409 1.788c-3.076 0-5.212-2.439-5.212-5.576c0-3.151 2.121-5.575 5.212-5.575zm4.471 1.212c0-.621.455-1.121 1.137-1.121c.651 0 1.137.424 1.137 1.121v3.273l3.727-3.97c.167-.182.455-.424.879-.424c.576 0 1.121.439 1.121 1.091c0 .393-.242.712-.742 1.212l-2.863 2.818l3.5 3.651c.363.364.637.697.637 1.152c0 .712-.562 1.045-1.183 1.045c-.44 0-.727-.258-1.151-.712l-3.924-4.243v3.864c0 .591-.455 1.091-1.137 1.091c-.651 0-1.137-.424-1.137-1.091v-8.757z">
  </path>
</svg>`;
const save = `<svg class="icon"  viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>save_item [#1410]</title>
  <desc>Created with Sketch.</desc>
  <defs>
  </defs>
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="Dribbble-Light-Preview" transform="translate(-59.000000, -680.000000)" >
      <g id="icons" transform="translate(56.000000, 160.000000)">
        <path d="M10.21875,524 C10.21875,523.448 10.68915,523 11.26875,523 C11.84835,523 12.31875,523.448 12.31875,524 C12.31875,524.552 11.84835,525 11.26875,525 C10.68915,525 10.21875,524.552 10.21875,524 L10.21875,524 Z M19.8,535 C19.8,535.552 19.3296,536 18.75,536 L8.25,536 C7.6704,536 7.2,535.552 7.2,535 C7.2,534.448 7.6704,534 8.25,534 L18.75,534 C19.3296,534 19.8,534.448 19.8,535 L19.8,535 Z M19.8,531 C19.8,531.552 19.3296,532 18.75,532 L8.25,532 C7.6704,532 7.2,531.552 7.2,531 C7.2,530.448 7.6704,530 8.25,530 L18.75,530 C19.3296,530 19.8,530.448 19.8,531 L19.8,531 Z M21.9,537 C21.9,537.552 21.4296,538 20.85,538 L6.15,538 C5.5704,538 5.1,537.552 5.1,537 L5.1,527.044 C5.1,526.911 5.15565,526.784 5.2533,526.691 L7.2,524.837 L7.2,526 C7.2,527.105 8.13975,528 9.3,528 L17.7,528 C18.86025,528 19.8,527.105 19.8,526 L19.8,522 L20.85,522 C21.4296,522 21.9,522.448 21.9,523 L21.9,537 Z M9.3,522.837 L10.02555,522.146 C10.1232,522.053 10.2576,522 10.3962,522 L17.7,522 L17.7,525 C17.7,525.552 17.2296,526 16.65,526 L10.35,526 C9.7704,526 9.3,525.552 9.3,525 L9.3,522.837 Z M21.9,520 L9.75045,520 C9.4722,520 9.2055,520.105 9.00915,520.292 L3.31185,525.707 C3.11445,525.895 3.0042,526.149 3.0042,526.415 L3,538 C3,539.104 3.93975,540 5.09895,540 L21.9,540 C23.06025,540 24,539.105 24,538 L24,522 C24,520.895 23.06025,520 21.9,520 L21.9,520 Z" id="save_item-[#1410]">
        </path>
      </g>
    </g>
  </g>
</svg>`;
const reset = `<svg class="icon"  viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.56189 13.5L4.14285 13.9294L4.5724 14.3486L4.99144 13.9189L4.56189 13.5ZM9.92427 15.9243L15.9243 9.92427L15.0757 9.07574L9.07574 15.0757L9.92427 15.9243ZM9.07574 9.92426L15.0757 15.9243L15.9243 15.0757L9.92426 9.07574L9.07574 9.92426ZM19.9 12.5C19.9 16.5869 16.5869 19.9 12.5 19.9V21.1C17.2496 21.1 21.1 17.2496 21.1 12.5H19.9ZM5.1 12.5C5.1 8.41309 8.41309 5.1 12.5 5.1V3.9C7.75035 3.9 3.9 7.75035 3.9 12.5H5.1ZM12.5 5.1C16.5869 5.1 19.9 8.41309 19.9 12.5H21.1C21.1 7.75035 17.2496 3.9 12.5 3.9V5.1ZM5.15728 13.4258C5.1195 13.1227 5.1 12.8138 5.1 12.5H3.9C3.9 12.8635 3.92259 13.2221 3.9665 13.5742L5.15728 13.4258ZM12.5 19.9C9.9571 19.9 7.71347 18.6179 6.38048 16.6621L5.38888 17.3379C6.93584 19.6076 9.54355 21.1 12.5 21.1V19.9ZM4.99144 13.9189L7.42955 11.4189L6.57045 10.5811L4.13235 13.0811L4.99144 13.9189ZM4.98094 13.0706L2.41905 10.5706L1.58095 11.4294L4.14285 13.9294L4.98094 13.0706Z" />
</svg>`;
const solutions = `<svg class="icon" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 100 100" xml:space="preserve">
<g>
	<g>
		<path d="M47.6,20.1c-9.8,1.1-17.7,8.8-18.5,18.4c-0.6,7,2.5,13.4,7.5,17.5c1.5,1.2,2.4,3,2.4,4.9v0.1
			c0,2.8,2.3,5.1,5.2,5.1h11.6c2.9,0,5.2-2.3,5.2-5.1v-0.1c0-1.9,0.9-3.7,2.4-4.9C68,52.2,71,46.6,71,40.3
			C71,28.3,60.3,18.8,47.6,20.1z"/>
	</g>
	<g>
		<path d="M59,72H41c-1.1,0-2,0.9-2,2c0,3.3,2.7,6,6,6h10c3.3,0,6-2.7,6-6C61,72.9,60.1,72,59,72z"/>
	</g>
</g>
</svg>`;
export class Header {
  constructor(href, reset, save, nonogram, timerOnPouse, sound, solutions) {
    this.href = href;
    this.reset = reset;
    this.save = save;
    this.nonogram = nonogram;
    this.timerOnPouse = timerOnPouse;
    this.sound = sound;
    this.solutions = solutions;
  }
  audio = new Audio('./sound/click-sound.mp3');
  element = '';

  create() {
    this.element = document.createElement('header');
  }

  render() {
    this.element.classList.add('header');
    document
      .querySelector('.nonogram')
      .insertAdjacentElement('afterbegin', this.element);
    this.element.innerHTML = `
                              <div class="container">
                                <div class="header__container">
                                  <a href="${this.href}" class="header__icon header__icon--back">
                                    ${back}
                                  </a>
                                  <div class="header__icon header__icon--save">
                                    ${save}
                                  </div>
                                  <div class="header__icon header__icon--reset">
                                    ${reset}
                                  </div>
                                  <div class="header__icon header__icon--solutions">
                                    ${solutions}
                                  </div>
                                </div>
                              </div>`;
    document
      .querySelector('.header__icon--solutions')
      .addEventListener('click', this.solutions);
    document
      .querySelector('.header__icon--back')
      .addEventListener('click', this.back);
    document
      .querySelector('.header__icon--reset')
      .addEventListener('click', this.reset);
    document
      .querySelector('.header__icon--save')
      .addEventListener('click', this.save);
    if (this.sound) {
      document.querySelectorAll('.header__icon').forEach((item) =>
        item.addEventListener('click', () => {
          this.audio.preload = 'auto';
          this.audio.play();
        })
      );
    }
  }
  back = () => {
    this.timerOnPouse();
  };
  solutions = () => {
    this.solutions();
  };

  reset = () => {
    this.reset();
  };
  save = () => {
    this.save();
  };

  init() {
    this.create();
    this.render();
    new Timer(this.nonogram).init();
  }
}
