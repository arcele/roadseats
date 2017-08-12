import React from 'react'
import TeamInput from '../containers/TeamInput'
import LocationInput from '../containers/LocationInput'
import Results from '../containers/Results'
import chooseTeam from '../actions'

const App = () => (
	<div>
		<TeamInput />
		<LocationInput />
		<Results />
	</div>
)

export default App