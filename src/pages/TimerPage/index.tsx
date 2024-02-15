import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';


const TimerPage: FC = () => {
    const [minutes, setMinutes] = useState<string>('');
    const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);
    const [activeSeconds, setActiveSeconds] = useState<number>(0);
    const [isFinished, setIsFinished] = useState<boolean>(false);

    const handleMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') setMinutes('')
        else if (Number.isInteger(+e.target.value) && !e.target.value.includes('.') && !e.target.value.includes(',')) setMinutes(e.target.value)
    }

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' && +minutes && minutes !== '') {
            setIsTimerStarted(true)
            setActiveSeconds(+minutes * 60)
            setIsFinished(false)
            setMinutes('')
        }
    }

    const handleClearTimer = () => {
        setIsTimerStarted(false)
        setActiveSeconds(0)
    }

    useEffect(() => {
        if (isTimerStarted === true) {
            let count = activeSeconds
            const interval = setInterval(() => {
                setActiveSeconds(prev => --prev)
                count--
                if (count === 0) {
                    clearInterval(interval)
                    setIsTimerStarted(false)
                    setIsFinished(true)
                }
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [isTimerStarted])


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Таймер</h1>
            <input disabled={isTimerStarted} onKeyDown={handleEnter} placeholder='Введите количество минут' value={minutes} onChange={handleMinutes} className={styles.input} type="text" />
            <div className={styles.time}>
                {String(Math.floor(activeSeconds / 60)).split('').map((number, index) =>
                    <div className={styles.number} key={index}>{number}</div>
                )}
                <div className={styles.dots}>:</div>
                <div className={styles.number}>{Math.floor((activeSeconds % 60) / 10)}</div>
                <div className={styles.number}>{(activeSeconds % 60) % 10}</div>
            </div>
            <button disabled={!isTimerStarted} className={styles.clearTimer} onClick={() => handleClearTimer()}>Очистить таймер</button>
            <div className={`${styles.finished} ${isFinished ? styles.show : ''}`}>Готово</div>
        </div>
    )
}

export default TimerPage;