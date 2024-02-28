import React, { useState } from 'react'
import styles from './Palette.module.scss'

import {
	ADD_COLOR_BUTTON_TEXT,
	DEFAULT_COLOR,
} from '../../constants/palette-contants'
import {
	ColorBlock,
	addColor,
	deleteColor,
	updateColor,
} from '../../utils/palette-utils'
import {
	ColorBlockItem,
	ColorPickerModal,
} from '../../components/PaletteComponents'

const Palette: React.FC = () => {
	const [colors, setColors] = useState<ColorBlock[]>([])
	const [showModal, setShowModal] = useState<boolean>(false)
	const [tempColor, setTempColor] = useState<string>(DEFAULT_COLOR)
	const [editingColorId, setEditingColorId] = useState<number | null>(null)

	const openModal = (
		id: number | null = null,
		color: string = DEFAULT_COLOR
	) => {
		setEditingColorId(id)
		setTempColor(color)
		setShowModal(true)
	}

	const closeModal = () => setShowModal(false)

	const handleSaveColor = () => {
		if (editingColorId !== null) {
			setColors(updateColor(colors, editingColorId, tempColor))
		} else {
			setColors(addColor(colors, tempColor))
		}
		closeModal()
	}

	return (
		<div className={styles.wrapper}>
			<button onClick={() => openModal()}>{ADD_COLOR_BUTTON_TEXT}</button>
			{showModal && (
				<ColorPickerModal
					tempColor={tempColor}
					setTempColor={setTempColor}
					handleSaveColor={handleSaveColor}
					closeModal={closeModal}
				/>
			)}
			<div className={styles.colorContainer}>
				{colors.map(({ id, color }) => (
					<ColorBlockItem
						key={id}
						id={id}
						color={color}
						onEdit={openModal}
						onDelete={id => setColors(deleteColor(colors, id))}
					/>
				))}
			</div>
		</div>
	)
}

export default Palette
