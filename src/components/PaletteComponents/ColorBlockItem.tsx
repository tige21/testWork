import React from 'react'
import {
	DELETE_BUTTON_TEXT,
	EDIT_BUTTON_TEXT,
} from '../../constants/palette-contants'
import styles from './ColorBlockItem.module.scss'

interface ColorBlockItemProps {
	id: number
	color: string
	onEdit: (id: number, color: string) => void
	onDelete: (id: number) => void
}

const ColorBlockItem: React.FC<ColorBlockItemProps> = ({
	id,
	color,
	onEdit,
	onDelete,
}) => (
	<div
		key={id}
		className={styles.colorBlock}
		style={{ backgroundColor: color }}
	>
		<button className={styles.editButton} onClick={() => onEdit(id, color)}>
			{EDIT_BUTTON_TEXT}
		</button>
		<button className={styles.deleteButton} onClick={() => onDelete(id)}>
			{DELETE_BUTTON_TEXT}
		</button>
	</div>
)

export default ColorBlockItem
