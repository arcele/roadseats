import React, { Component } from 'react'
import { connect } from 'react-redux'

class Results extends Component  {
	
	componentDidMount() {
		const { dispatch } = this.props
	}

	getDistance() {
		if(this.props.searchLocation && this.props.teamLocation) {
			let lat1 = this.props.searchLocation.latitude.radians, lon1 = this.props.searchLocation.longitude.radians,
				lat2 = this.props.teamLocation.latitude.radians, lon2 = this.props.teamLocation.longitude.radians
			let deltaLat = lat2-lat1, deltaLon = lon2-lon1
			const a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon/2) * Math.sin(deltaLon/2)
			const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
			const d = 6371 * c;
			const m = d * .621371 
			return (Math.round(d * 10) / 10 + ' kms to travel. (' + Math.round(m * 10) / 10 + ' miles)')
		}
		return ''
	}

	render() {
		return(
			<div>
				{ this.getDistance() }
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { type, teamLocation, searchLocation } = state
	return { type, teamLocation, searchLocation }
}

export default connect(mapStateToProps)(Results)
