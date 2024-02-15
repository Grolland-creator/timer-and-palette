import { FC, PropsWithChildren } from 'react';
import styles from './index.module.scss';
import Header from '../../widgets/Header';

interface Props {

}


const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {

    return (
        <div className={styles.wrapper}>
            <Header />
            {children}
        </div>
    )
}

export default Layout;