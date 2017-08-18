import React, { Component } from 'react'
import { connect } from 'react-redux'
import { chooseLocation } from '../actions'

class LocationInput extends Component {
	render () {
		let input
		return (
			<form>
				<select ref={node => { input = node }}
					onChange={ e => {
						e.preventDefault()
						if(input.value === -1) {
							return false
						}
						console.log('chooseLocation >', input.value)
						this.props.dispatch(chooseLocation(input.value))
					}}>
					<option value="-1"> -- Your Location --</option>
					<option value="21.3069N,157.8583W">Honolulu, HI</option>
					<option value="47.6062N,122.3321W">Seattle, WA</option>
					<option value="32.7157N,117.1611W">San Diego, CA</option>
					<option value="44.9778N,93.2650W">Minneapolis, MN</option>
					<option value="30.2672N,97.7431W">Austin, TX</option>
					<option value="41.7637N,72.6851W">Hartford, CT</option>
					<option value="38.7209N,75.0760W">Rehoboth Beach, DE</option>
				</select>


			</form>
		)
	}
}
LocationInput = connect()(LocationInput)

export default LocationInput