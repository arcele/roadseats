import React from 'react'
import TeamInput from '../containers/TeamInput'
import LocationInput from '../containers/LocationInput'
import chooseTeam from '../actions'

const App = () => (
	<div>
		<TeamInput />
		<LocationInput />
	</div>
)

export default App