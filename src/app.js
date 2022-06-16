import { _axios } from '@api/index';
import { Class, Quiz } from '@components/index';
import { CLASS_ROOT, QUIZ_ROOT, $ } from '@utils/index';

class App {
  constructor() {
    return (async () => {
      this.$loading = $({ selector: '.spinner-border' });
      this.$container = $({ selector: '.container' });
      const [classState, quizState] = await Promise.all([_axios({ path: CLASS_ROOT }), _axios({ path: QUIZ_ROOT })]);

      this.class = new Class({
        $target: $({ selector: '.class-table-body' }),
        state: classState,
      });

      this.quiz = new Quiz({
        $target: $({ selector: '.quiz-table-body' }),
        state: quizState,
      });
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

    this.class.render();
    this.quiz.render();
  }
}

export default App;
