function parseCoordinates(xyString) {
	// turn coordinates in string format '47.61W,122.33N' into coordinate object
	let xyObject = {}
	const splitString = xyString.split(',')
	if(splitString.length == 2) {
		xyObject = {
			latitude : {
				radians: splitString[0].slice(0,splitString[0].length-1),
				direction: splitString[0].slice(-1)
			},
			longitude: {
				radians: splitString[1].slice(0,splitString[1].length-1),
				direction: splitString[1].slice(-1)
			}
		}
	}
	return xyObject;
}

export const chooseTeam = (teamLocation) => ({
	type: 'TEAM_CHOSEN',
	teamLocation: parseCoordinates(teamLocation)
})

export const chooseLocation = (searchCoordinates) => ({
	type: 'LOCATION_CHOSEN',
	searchLocation: parseCoordinates(searchCoordinates)
})