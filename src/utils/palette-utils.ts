import { ColorResult } from 'react-color';

export type ColorBlock = {
    id: number;
    color: string;
};

export const addColor = (colors: ColorBlock[], newColor: string): ColorBlock[] => {
    return [...colors, { id: Date.now(), color: newColor }];
};

export const updateColor = (colors: ColorBlock[], id: number, newColor: string): ColorBlock[] => {
    return colors.map(c => c.id === id ? { ...c, color: newColor } : c);
};

export const deleteColor = (colors: ColorBlock[], id: number): ColorBlock[] => {
    return colors.filter(c => c.id !== id);
};

export const handleColorChange = (color: ColorResult, setColor: React.Dispatch<React.SetStateAction<string>>) => {
    setColor(color.hex);
};
