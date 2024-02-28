import React from 'react'
import { SketchPicker } from 'react-color'
import { SAVE_COLOR_BUTTON_TEXT } from '../../constants/palette-contants'
import styles from './ColorPickerModal.module.scss'

interface ColorPickerModalProps {
	tempColor: string
	setTempColor: (color: string) => void
	handleSaveColor: () => void
	closeModal: () => void
}

const ColorPickerModal: React.FC<ColorPickerModalProps> = ({
	tempColor,
	setTempColor,
	handleSaveColor,
	closeModal,
}) => (
	<div className={styles.modalOverlay} onClick={closeModal}>
		<div className={styles.modalContent} onClick={e => e.stopPropagation()}>
			<SketchPicker
				color={tempColor}
				onChange={color => setTempColor(color.hex)}
			/>
			<button className={styles.modalButton} onClick={handleSaveColor}>
				{SAVE_COLOR_BUTTON_TEXT}
			</button>
		</div>
	</div>
)

export default ColorPickerModal
