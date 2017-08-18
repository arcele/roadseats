import React, { Component } from 'react'
import { connect } from 'react-redux'
import { chooseTeam } from '../actions'
import { teams } from '../data/teams'

class TeamInput extends Component {

	render() {
		let input
		const sortedTeamIndexes = Object.keys(teams).sort(function(a,b) { return (teams[a].location > teams[b].location) ? 1 : -1 })
		return (
			<div>
				<form>
					<select ref={node => { input = node }}
						onChange={e => {
							e.preventDefault()
							if(input.value === -1) {
								return
							}
							this.props.dispatch(chooseTeam(input.value))
						}}>
						<option value="-1"> -- Your Team --</option>
						{sortedTeamIndexes.map(teamId => (
							<option key={teamId} value={teamId}>{teams[teamId].location} {teams[teamId].name}</option>
						))}	
					</select>
				</form>
			</div>
		)
	}
}
TeamInput = connect()(TeamInput)

export default TeamInput