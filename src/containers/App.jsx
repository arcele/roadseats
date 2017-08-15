import React, { Component } from 'react'
import { connect } from 'react-redux'
import TeamInput from '../components/TeamInput'
import LocationInput from '../components/LocationInput'
import Results from '../components/Results'
import chooseTeam from '../actions'

class App extends Component {
	render() {
		return(
			<div>
				<TeamInput />
				<LocationInput />
				<Results />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { type, teamLocation, searchLocation } = state
	return { type, teamLocation, searchLocation }
}


export default connect(mapStateToProps)(App)