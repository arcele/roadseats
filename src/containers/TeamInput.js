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
					if(input.value < 1) {
						return
					}
					console.log('chooseTeam ->', input.value)
					dispatch(chooseTeam(input.value))
				}}>
					<option value="-1"> -- Your Team --</option>
					<option value="1">Atlanta Falcons</option>
					<option value="2">Buffalo Bills</option>
					<option value="21">Philadelphia Eagles</option>
				</select>
			</form>
		</div>
	)
}
TeamInput = connect()(TeamInput)

export default TeamInput