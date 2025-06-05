import { AppRouter } from '@/app/providers/router';
import './styles/index.scss';
import { Header } from '@/widgets/header';

const App = () => {
  return (
    <div className="app">
        <Header />
        <AppRouter />
    </div>
  );
};

export default App;
