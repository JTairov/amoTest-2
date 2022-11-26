import React from 'react'
import styles from './MyButton.module.css'

export default function MyButton(props) {
	return (
		<button 
			className={`${styles.button} ${props.buttonClass}`}
		>
			{props.children}
		</button>
	)
}
