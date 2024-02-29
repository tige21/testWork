export const TIMER_INITIAL_INPUT_PLACEHOLDER = 'Введите время (мин.сек)'
export const TIMER_DONE_MESSAGE = 'Готово'
export const TIMER_INFO_MODAL_CONTENT = 'Правила использования таймера...'
export const TIMER_INPUT_PLACEHOLDER = 'Таймер'

export const TIMER_RULES_TITLE = 'Правила использования таймера:'

export const timerRules: string[] = [
	'Введите время в формате минут и секунд (например, "1.30" для 1 минуты и 30 секунд).',
	'Вводите только положительные числа. При вводе отрицательного числа появится ошибка.',
	'После ввода времени нажмите "Enter" для начала отсчета.',
	'Таймер отсчитывает время до нуля, после чего отображается сообщение "Готово".',
	'В случае ошибки ввода появится сообщение об ошибке, которое исчезнет через несколько секунд.',
]