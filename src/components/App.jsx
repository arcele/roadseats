import React, { Component } from 'react'
import { connect } from 'react-redux'
import TeamInput from '../containers/TeamInput'
import LocationInput from '../containers/LocationInput'
import Results from '../containers/Results'
import chooseTeam from '../actions'

class App extends Component {
	render() {
		console.log('this.props:', this.props)
		return(
			<div>
				<TeamInput />
				<LocationInput />
				<Results />
			</div>
		)
	}
}


export default connect()(App)