import React from 'react'
import styles from './TimerRulesList.module.scss'

interface TimerRulesListProps {
	timerRules: string[]
}
const TimerRulesList: React.FC<TimerRulesListProps> = ({ timerRules }) => {
	return (
		<ol className={styles.timerRulesList}>
			{timerRules.map((rule, index) => (
				<li key={index}>{rule}</li>
			))}
		</ol>
	)
}

export default TimerRulesList
