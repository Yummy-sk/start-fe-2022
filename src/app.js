import { _axios } from '@api/index';
import { CLASS_ROOT, QUIZ_ROOT, $ } from '@utils/index';

class App {
  constructor() {
    return (async () => {
      this.$loading = $({ selector: '.spinner-border' });
      this.$container = $({ selector: '.container' });
      this.state = await Promise.all([_axios({ path: CLASS_ROOT }), _axios({ path: QUIZ_ROOT })]);
      return this;
    })();
  }

  delayProcess({ delay }) {
    return new Promise(resolve => {
      setTimeout(resolve, delay);
    });
  }

  async render() {
    await this.delayProcess({ delay: 1500 });
    this.$loading.classList.add('hide');
    this.$container.classList.remove('hide');
  }
}

export default App;
