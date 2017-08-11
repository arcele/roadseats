export const chooseTeam = (teamId) => ({
	type: 'TEAM_CHOSEN',
	teamId
})

export const chooseLocation = (coordinates) => ({
	type: 'LOCATION_CHOSEN',
	location: coordinates
})