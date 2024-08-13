import React from 'react'

interface LinksProps {
	address: string,
	name: string
}


export const SearchLinks:React.FC<{links:LinksProps[]}> = ({links}) => {
  return (
	<div className='search-links'>
		{links.map((link) => (
			<a href={link.address}>{link.name}</a>
		))}
	</div>
  )
}
