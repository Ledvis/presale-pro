/*eslint-disable */

export default new class Popup {
  constructor() {
    this.triggers = document.querySelectorAll('.team__patch');
    this.overlay = document.querySelector('.overlay');
  }

  get template() {
    return `
      <div class="popup" style="">
        <button class="popup__button" type="button">&#10005</button>
        <h3 class="popup__title">John Galt</h3>
        <span class="popup__label">founder, evangelist</span>
        <p class="popup__text">
          Has over 20 years of experience in IT, computing, and computer gaming. He was one of the earliest pioneers to capitalise upon the sale of virtual items in massively multiplayer online (MMO) games. He was instrumental in the success of Namecoin, supporting the cryptocurrency at a time when development had stalled. Andrew has run a successful IT and computing business and provided advanced ‘dialler systems’ development and consultancy to small and medium enterprises (SME) and moderately sized companies.
        </p>
        <p class="popup__text">
          He is the founder of the Huntercoin experiment which led the World in demonstrating the art of the possible with blockchain technology, achieving the World’s first game built on the blockchain, the World’s first server-less / decentralised MMO game, the World’s first ‘human mineable’ cryptocurrency, and the World’s first provably fair MMO game.
        </p>
      </div>
    `;
  }

  get element() {
    if (!this._element) {
      this.getMarkup();
    }

    return this._element;
  }

  bind() {
    this.triggers.forEach(trigger => trigger.addEventListener('click', (event) => {
      this.side = event.currentTarget.dataset.side;
      this.onFaceClick();
    }));

    this.element.querySelector('.popup__button').addEventListener('click', () => {
      this.closePopup();
      this.overlay.classList.remove('overlay--active');
    })
  }

  onFaceClick() {
    this.render();
    this.overlay.classList.add('overlay--active');
  }

  closePopup() {
    this._element.remove();
  }

  getMarkup() {
    this._element = this.getElementFromTemplate(this.template);
  }

  getElementFromTemplate() {
    const container = document.createElement('div');
    container.innerHTML = this.template.trim();
    return container;
  }

  render() {
    document.querySelector('body').appendChild(this.element);
  }
}();
