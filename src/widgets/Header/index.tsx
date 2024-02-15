import { FC } from 'react';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';


const Header: FC = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Link className={`${styles.button} ${styles.timer}`} to='/timer'>Timer</Link>
                <Link className={`${styles.button} ${styles.colours}`} to='/palette'>Palette</Link>
            </div>
        </div>
    )
}

export default Header;