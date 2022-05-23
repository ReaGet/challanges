class Counter {
  #wrapper = null;
  #input = null;
  #inscreaseBtn = null;
  #descreaseBtn = null;
  #pressed = false;
  current = 0;

  constructor(selector) {
    this.#wrapper = document.querySelector(selector);
    const wrapper = this.#wrapper;
    this.#input = wrapper.querySelector('input[type=text]');
    this.#inscreaseBtn = wrapper.querySelector('.counter__button--plus');
    this.#descreaseBtn = wrapper.querySelector('.counter__button--minus');

    this.#bind();
  }

  #bind() {
    let timer;
    // this.#inscreaseBtn.addEventListener('click', this.increase.bind(this));
    this.#descreaseBtn.addEventListener('click', this.decrease.bind(this));
    this.#inscreaseBtn.addEventListener('mousedown', () => {
      timer = setTimeout(this.increase.bind(this), 0);
    });

    this.#inscreaseBtn.addEventListener('mouseup', () => {
      clearTimeout(timer);
    });
  }

  increase() {
    this.current += 1;
    this.#input.value = this.current;
  }

  decrease() {
    this.current -= 1;
    this.current = Math.max(0, this.current);
    this.#input.value = this.current;
  }
}

let counter = new Counter('.counter__wrapper');
