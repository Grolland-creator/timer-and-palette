import { FC } from 'react';
import styles from './index.module.scss';
import { SketchPicker } from 'react-color';
import { useActions, useAppSelector } from '../../shared/hooks/redux';

interface PropsPickerModal {
    isPickerOpen: boolean;
    setIsPickerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    currentId: number;
}

const PickerModal: FC<PropsPickerModal> = ({ isPickerOpen, setIsPickerOpen, currentId }) => {
    const colors = useAppSelector(state => state.colors.colors)
    const { changeColor: changeColorAction } = useActions()



    return (
        <div className={`${styles.modalWrapper} ${isPickerOpen ? styles.open : ''}`}>
            <div onClick={() => setIsPickerOpen(false)} className={styles.blur}></div>
            <div className={styles.modal}>
                <div className={styles.currentColor} style={{ backgroundColor: colors.find(i => i.id === currentId)?.hex }}></div>
                <SketchPicker
                    color={colors.find(i => i.id === currentId)?.hex}
                    onChangeComplete={color => changeColorAction(currentId, color.hex)}
                />
                <div onClick={() => setIsPickerOpen(false)} className={styles.close}>
                    <img src="./img/Close.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default PickerModal;