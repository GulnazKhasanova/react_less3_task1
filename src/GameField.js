import styles from './App.module.css';
import { useState } from 'react';
import { FieldButton } from './FieldButton'

export const GameField = () => {

	const gamers = {
		XMen : 'x',
		ZeroMen : '0',
	};
	const WIN_PATTERNS = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
	  ];

	const [step, setStep] = useState(gamers.XMen)
	const [fields, setFields] = useState(Array(9).fill(''));
	const [winner, setWinner] = useState('')

	const handleClick = (id) => {
		if(winner === '') {
		const newFields=fields.map((field,index) => (index === id)&&(field === '')  ? (field = step) : field)
		setFields(newFields)
		setStep(prevStep => prevStep === gamers.XMen ? gamers.ZeroMen : gamers.XMen)
		checkedWinner(newFields, step);
		}
	}

	const checkedWinner = (fields, step) => {
		return WIN_PATTERNS.some((pattern) => pattern.every((i) => fields[i] === step )) ? setWinner(step) : setWinner('');
	}

	const startOver = () => {
		setFields(Array(9).fill(''));
		setWinner('');
	}

	return (<>
	<p className={styles.information}>{winner === '' ? 'Ход пренадлежит ' + step : 'Победил ' + winner}</p>
	<div className={styles.gameField}>
		<FieldButton fields = {fields} handleClick = {handleClick}/>
	</div>
	<div>
		<button className={styles.gameFieldAccept} onClick={startOver}>Начать заново</button>
	</div>
	</>
	)
}
