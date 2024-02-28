import React from 'react'
import styles from './InfoModal.module.scss'
import TimerRulesList from './TimerRulesList'

interface InfoModalProps {
	showModal: boolean
	content: string[]
	title: string
	onClose: () => void
}

const InfoModal: React.FC<InfoModalProps> = ({
	showModal,
	content,
	onClose,
	title,
}) => {
	if (!showModal) return null

	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<div className={styles.modalContent} onClick={e => e.stopPropagation()}>
				<div className={styles.rulesTitle}>{title}</div>
				<TimerRulesList timerRules={content} />
			</div>
		</div>
	)
}

export default InfoModal
