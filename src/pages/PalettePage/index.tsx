import { FC, useState } from 'react';
import styles from './index.module.scss';
import { useActions, useAppSelector } from '../../shared/hooks/redux';
import PickerModal from '../../widgets/PickerModal';


const PalettePage: FC = () => {
    const [currentId, setCurrentId] = useState<number>(0);
    const colors = useAppSelector(state => state.colors.colors)
    const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
    const {addColor: addColorAction, deleteColor: deleteColorAction} = useActions()

    const addColor = () => {
        const uid = Math.random()
        addColorAction({ hex: '#555', id: uid })
        setCurrentId(uid)
        setIsPickerOpen(true)
    }

    const deleteColor = (id: number) => {
        deleteColorAction(id)
    }

    const handleColorClick = (id: number) => {
        setCurrentId(id); 
        setIsPickerOpen(true)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Палитра</h1>
            <div className={styles.block}>
                <h2 className={styles.yourTitle}>Ваша палитра цветов:</h2>
                {colors.length > 0
                    ?
                    <div className={styles.list}>
                        {colors.map(color =>
                            <div key={color.id} className={styles.colorContainer}>
                                <div onClick={() => handleColorClick(color.id)} key={Math.random()} className={styles.color} style={{ backgroundColor: color.hex }}>
                                </div>
                                <div onClick={() => deleteColor(color.id)} className={styles.close}>
                                    <img src="./img/Close.svg" alt="" />
                                </div>
                            </div>
                        )}
                    </div>
                    :
                    <p className={styles.filler}>У вас ещё нет цветов</p>
                }
            </div>
            <button onClick={() => addColor()} className={styles.add}>Добавить цвет</button>
            <PickerModal isPickerOpen={isPickerOpen} setIsPickerOpen={setIsPickerOpen} currentId={currentId}/>
        </div>
    )
}

export default PalettePage;