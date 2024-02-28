import InfoIcon from '@mui/icons-material/Info'
import React, { useEffect, useState } from 'react'
import {
	InfoModal,
	TimerDisplay,
	TimerInput,
} from '../../components/TimerComponents'
import {
	TIMER_DONE_MESSAGE,
	TIMER_INITIAL_INPUT_PLACEHOLDER,
	TIMER_RULES_TITLE,
	timerRules,
} from '../../constants/timer-constants'
import { formatTime, initializeTimer } from '../../utils/timer-utils'
import styles from './Timer.module.scss'

const Timer: React.FC = () => {
	const [time, setTime] = useState<number>(0)
	const [timerOn, setTimerOn] = useState<boolean>(false)
	const [showDone, setShowDone] = useState<boolean>(false)
	const [error, setError] = useState<string>('')
	const [showInfoModal, setShowInfoModal] = useState<boolean>(false)

	const startTimer = initializeTimer(setTime, setTimerOn)

	useEffect(() => {
		let interval: ReturnType<typeof setInterval> | null = null

		if (timerOn && time > 0) {
			interval = setInterval(() => {
				setTime(prevTime => prevTime - 1)
			}, 1000)
		} else if (time <= 0 && timerOn) {
			setTimerOn(false)
			setShowDone(true)
			setTimeout(() => setShowDone(false), 5000)
			clearInterval(interval!)
		}

		return () => clearInterval(interval!)
	}, [time, timerOn])

	useEffect(() => {
		if (error !== '') {
			const timer = setTimeout(() => setError(''), 3000)
			return () => clearTimeout(timer)
		}
	}, [error])

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			const value = parseFloat(event.currentTarget.value)
			const errorMessage = startTimer(value)
			setError(errorMessage)
		}
	}

	return (
		<div>
			<div className={styles.infoIcon} onClick={() => setShowInfoModal(true)}>
				<InfoIcon sx={{ color: 'white' }} />
				<div className={styles.tooltip}>Информация о таймере</div>
			</div>

			<InfoModal
				showModal={showInfoModal}
				content={timerRules}
				title={TIMER_RULES_TITLE}
				onClose={() => setShowInfoModal(false)}
			/>

			<div className={styles.timerContainer}>
				{!timerOn ? (
					<TimerInput
						onKeyDown={handleKeyDown}
						placeholder={TIMER_INITIAL_INPUT_PLACEHOLDER}
						disabled={timerOn}
					/>
				) : (
					<TimerDisplay message={formatTime(time)} />
				)}
				{showDone && <TimerDisplay message={TIMER_DONE_MESSAGE} />}
				{error && <div className={styles.errorDisplay}>{error}</div>}
			</div>
		</div>
	)
}

export default Timer
