import { combineReducers } from 'redux'

const red = (state = { }, action) => {
	switch(action.type) {
		case 'TEAM_CHOSEN': 
			return Object.assign({}, state, {
				teamLocation: action.teamLocation
			})
		case 'LOCATION_CHOSEN':
			return Object.assign({}, state, {
				searchLocation: action.searchLocation
			})
		default:
			return state
	}
}

export default red