import React from 'react'
import Link from './Link/Link'

export default function LinkList({links, ...props}) {
	return (
		<ul
			className={`${props.linkListClass} links`}
		>
			{links.map(link => 
				<li>
					<Link link={link} key={link.content}>{link.content}</Link>
				</li>
			)}
			{props.children}
		</ul>
	)
}
