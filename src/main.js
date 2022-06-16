import App from '@/app';
import '@style/main.css';

async function Main() {
  const app = await new App();

  app.render();
}

Main();
