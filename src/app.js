import { _axios } from '@api/index';
import { Class, Quiz } from '@components/index';
import { CLASS_ROOT, QUIZ_ROOT, $, $$ } from '@utils/index';

class App {
  constructor() {
    return (async () => {
      this.$loading = $({ selector: '.spinner-border' });
      this.$container = $({ selector: '.container' });
      this.$classBtnGroup = $({ selector: '.btn-group.class' });
      this.$quizBtnGroup = $({ selector: '.btn-group.quiz' });
      this.$classLinks = $$({ selector: '.class .btn.btn-outline-primary' });
      this.$quizLinks = $$({ selector: '.quiz .btn.btn-outline-primary' });
      this.state = await Promise.all([_axios({ path: CLASS_ROOT }), _axios({ path: QUIZ_ROOT })]);

      const [classState, quizState] = this.state;

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

  handleBtnActive({ name, $target }) {
    [...$target].map(tar => {
      if (tar.name === name) {
        tar.classList.add('active');
      } else {
        tar.classList.remove('active');
      }
    });
  }

  registerClassBtnEvent() {
    this.$classBtnGroup.addEventListener('click', ({ target }) => {
      const classState = [...this.state[0]];
      const name = target.name;
      let nextState = null;

      this.handleBtnActive({ name, $target: this.$classLinks });

      switch (name) {
        case 'all':
          nextState = classState;
          return this.setState({ state: classState, type: 'class' });
        case 'link':
          nextState = this.class.filterLinks({ state: classState });
          this.setState({ state: nextState, type: 'class' });
          break;
        case 'git':
          nextState = this.class.filerGit({ state: classState });
          this.setState({ state: nextState, type: 'class' });
          break;
        case 'recent':
          nextState = this.class.filterRecent({ state: classState });
          this.setState({ state: nextState, type: 'class' });
        default:
          break;
      }
    });
  }

  registerQuizBtnEvent() {
    this.$quizBtnGroup.addEventListener('click', e => {
      const quizState = [...this.state[1]];
      const name = e.target.name;
      let nextState = null;

      this.handleBtnActive({ name, $target: this.$quizLinks });
      switch (name) {
        case 'all':
          nextState = quizState;
          this.setState({ state: quizState, type: 'quiz' });
          break;
        case 'git':
          nextState = this.quiz.filerGit({ state: quizState });
          this.setState({ state: nextState, type: 'quiz' });
          break;
        default:
          break;
      }
    });
  }

  delayProcess({ delay }) {
    return new Promise(resolve => {
      setTimeout(resolve, delay);
    });
  }

  setState({ state, type }) {
    if (type === 'class') {
      this.class.setState({ nextState: state });
      return;
    }

    if (type === 'quiz') {
      this.quiz.setState({ nextState: state });
      return;
    }
  }

  async render() {
    this.registerClassBtnEvent();
    this.registerQuizBtnEvent();

    await this.delayProcess({ delay: 1500 });

    this.$loading.classList.add('hide');
    this.$container.classList.remove('hide');

    this.class.render();
    this.quiz.render();
  }
}

export default App;
