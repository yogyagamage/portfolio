import { Divider, Stack } from '@mui/material';
import React from 'react'

export default function Title(prop) {

	const { title } = prop;

	return (
		<div style={{ color: "black", height: "35vh", borderBottom: "1px dotted blue" }}>
			<Stack
				direction="column"
				justifyContent="center"
				sx={{
					height: "100%"
				}}>
				<h1>title</h1>
			</Stack>

		</div>
	)
}
