import styles from './App.module.css';
import { useState } from 'react';
import { GameField } from './GameField'

export const App = () => {
		return <div className={styles.container}>
			<label className ={styles.title}>Крестики нолики</label>
				<GameField />
		</div>
}




