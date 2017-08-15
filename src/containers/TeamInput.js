import React from 'react'
import { connect } from 'react-redux'
import { chooseTeam } from '../actions'

let TeamInput = ({ dispatch }) => {
	let input
	return (
		<div>
			<form>
				<select ref={node => { input = node }}
					onChange={e => {
						e.preventDefault()
						if(input.value === -1) {
							return
						}
						console.log('chooseTeam ->', input.value)
						dispatch(chooseTeam(input.value))
					}}>
					<option value="-1"> -- Your Team --</option>
					<option value="33.75528N,84.40099W">Atlanta Falcons</option>
					<option value="42.77378N,78.78695W">Buffalo Bills</option>
					<option value="39.900496398N,75.167165998W">Philadelphia Eagles</option>
				</select>
			</form>
		</div>
	)
}
TeamInput = connect()(TeamInput)

export default TeamInput