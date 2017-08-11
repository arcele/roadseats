import { combineReducers } from 'redux'

const red = (state = [], action) => {
	switch(action.type) {
		case 'FOO':
			return [
				...state,
				{
					foo: 'bar'
				}
			]
		default:
			return state
	}
}

export default red