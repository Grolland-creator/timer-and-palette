import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TimerPage from '../pages/TimerPage';
import PalettePage from '../pages/PalettePage';


const AppRouter: FC = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/timer' element={<TimerPage />} />
            <Route path='/palette' element={<PalettePage />} />
        </Routes>
    )
}

export default AppRouter;