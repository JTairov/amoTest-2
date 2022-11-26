import React from 'react'

export default function Section(props) {
	return (
		<section className={props.sectionClass}>
			{props.children}
		</section>
	)
}
