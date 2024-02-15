import { FC } from 'react';
import styles from './index.module.scss';


const HomePage: FC = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Тестовое задание</h1>
        </div>
    )
}

export default HomePage;