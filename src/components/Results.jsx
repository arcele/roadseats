import React, { Component } from 'react'
import { connect } from 'react-redux'
import { stadiums } from '../data/stadiums'
import { parseCoordinates } from '../actions/index'


class Results extends Component  {
	
	componentDidMount() {
		const { dispatch } = this.props
	}

	getStadiumByMatchup(matchup) {
		let stadium = null
		Object.keys(stadiums).map( (stadiumId) => {
			if(stadiums[stadiumId].teamId == matchup.homeProTeamId) {
				stadium = stadiums[stadiumId]
			}
		})
		return stadium
	}

	searchSchedule() {
		let matches = {}; // I'm making this an object indexed by distance, because i'm lazy
		if(this.props.searchLocation && this.props.team) {
			this.props.team.schedule.map( (matchup) => {
				console.log('scheduleItem', matchup)
				let distance = 5000
				const stadium = this.getStadiumByMatchup(matchup)
				if(stadium) {
					distance = this.getDistance(parseCoordinates(stadium.location), this.props.searchLocation)
					let matchesKey = parseFloat(distance.split(' ')[0])
					if(matchesKey in matches) {
						matches[matchesKey].push(stadium)
					} else {
						matches[matchesKey] = new Array(stadium)
					}
				} else {
					console.log('Ain\'t no stadium for:', matchup)
				}
			})	
			console.log('matches:', matches)
			return 'dope!'
		}
		return 'nah'
	}

	getDistance(loc1, loc2) {
		let lat1 = loc1.latitude.radians, lon1 = loc1.longitude.radians,
			lat2 = loc2.latitude.radians, lon2 = loc2.longitude.radians
		let deltaLat = lat2-lat1, deltaLon = lon2-lon1
		const a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon/2) * Math.sin(deltaLon/2)
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
		const d = 6371 * c;
		const m = d * .621371 
		return (Math.round(d * 10) / 10 + ' kms to travel. (' + Math.round(m * 10) / 10 + ' miles)')
	}
	
	render() {
		return(
			<div>
				{ this.searchSchedule() }
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { type, team, searchLocation } = state
	return { type, team, searchLocation }
}

export default connect(mapStateToProps)(Results)
