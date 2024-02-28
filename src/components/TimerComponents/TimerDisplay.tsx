import React from 'react'
import styles from './TimerDisplay.module.scss'

interface TimerDisplayProps {
	message: string
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ message }) => (
	<div className={styles.timerDisplay}>{message}</div>
)

export default TimerDisplay
