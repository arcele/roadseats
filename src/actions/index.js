import { teams } from '../data/teams'

function parseCoordinates(xyString) {
	// turn coordinates in string format '47.61W,122.33N' into coordinate object
	let xyObject = {}
	const splitString = xyString.split(',')
	if(splitString.length == 2) {
		xyObject = {
			latitude : {
				radians: splitString[0].slice(0,splitString[0].length-1) / 180 * Math.PI,
				direction: splitString[0].slice(-1)
			},
			longitude: {
				radians: splitString[1].slice(0,splitString[1].length-1) / 180 * Math.PI,
				direction: splitString[1].slice(-1)
			}
		}
	}
	return xyObject;
}

export const chooseTeam = (teamId) => {
	const team = teams[teamId]
	return {
		type: 'TEAM_CHOSEN',
		team: team
	}
}

export const chooseLocation = (searchCoordinates) => ({
	type: 'LOCATION_CHOSEN',
	searchLocation: parseCoordinates(searchCoordinates)
})