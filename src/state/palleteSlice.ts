import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PaletteState {
	colors: string[]
}

const initialState: PaletteState = {
	colors: [],
}

export const paletteSlice = createSlice({
	name: 'palette',
	initialState,
	reducers: {
		addColor: (state, action: PayloadAction<string>) => {
			state.colors.push(action.payload)
		},
		removeColor: (state, action: PayloadAction<number>) => {
			state.colors = state.colors.filter((_, index) => index !== action.payload)
		},
		editColor: (
			state,
			action: PayloadAction<{ index: number; color: string }>
		) => {
			const { index, color } = action.payload
			state.colors[index] = color
		},
	},
})

export const { addColor, removeColor, editColor } = paletteSlice.actions

export default paletteSlice.reducer
