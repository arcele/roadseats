import React from 'react'
import { connect } from 'react-redux'

let Results = ({ dispatch }) => {
	return(
		<div>
			You Could Go To This Place
		</div>
	)
}

Results = connect()(Results)
export default Results