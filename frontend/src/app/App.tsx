import { AppRouter } from '@/app/providers/router';
import './styles/index.scss';
import { Header } from '@/widgets/header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/app/providers/store/store';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className='app'>
                    <Header />
                    <AppRouter />
                </div>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
