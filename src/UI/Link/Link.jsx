import React from 'react'
import styles from './Link.module.css'

export default function Link({link, ...props}) {
	return (
		<a
			className={`${styles.link} ${props.linkClass}`}
			href={link.href}
		>
			{props.children}
		</a>
	)
}
