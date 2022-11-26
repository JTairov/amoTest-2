import React, { useState } from 'react'
import LinkList from '../LinkList'

export default function Navbar(props) {
	return (
		<nav
			className={props.navClass}
		>
			<LinkList links={props.links}/>
		</nav>
	)
}
