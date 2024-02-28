import { Dispatch, SetStateAction } from 'react'

export const initializeTimer = (
	setTime: Dispatch<SetStateAction<number>>,
	setTimerOn: Dispatch<SetStateAction<boolean>>
) => {
	return (value: number): string => {
		if (value <= 0) {
			return 'Вы ввели не правильный тип числа. Еще раз посмотреть прила пользования'
		}

		const minutes = Math.floor(value)
		let seconds = Math.round((value - minutes) * 100)
		seconds = seconds >= 60 ? 59 : seconds
		setTime(minutes * 60 + seconds)
		setTimerOn(true)
		return ''
	}
}

export const formatTime = (time: number): string => {
	const minutes = Math.floor(time / 60)
	const seconds = time % 60
	return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
