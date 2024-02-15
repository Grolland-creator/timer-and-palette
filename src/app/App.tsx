import { FC } from 'react';
import './App.scss';
import AppRouter from './AppRouter';
import Layout from './Layout';

const App: FC = () => {

    return (
        <Layout>
            <AppRouter />
        </Layout>
    )
}

export default App;