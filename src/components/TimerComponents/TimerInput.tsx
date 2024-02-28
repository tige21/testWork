import cn from 'classnames'
import React from 'react'
import styles from './TimerInput.module.scss'
import { TIMER_INPUT_PLACEHOLDER } from '../../constants/timer-constants'

interface TimerInputProps {
	onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
	placeholder: string
	disabled: boolean
}

const TimerInput: React.FC<TimerInputProps> = ({
	onKeyDown,
	placeholder,
	disabled,
}) => (
	<div className={cn(styles.form__group, 'field')}>
		<input
			type='input'
			className={cn(styles.form__field)}
			placeholder={placeholder}
			name='timer'
			id='timer'
			required
			onKeyDown={onKeyDown}
			disabled={disabled}
		/>
		<label htmlFor='timer' className={cn(styles.form__label)}>
			{TIMER_INPUT_PLACEHOLDER}
		</label>
	</div>
)

export default TimerInput
