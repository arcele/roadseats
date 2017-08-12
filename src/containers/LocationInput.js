import React from 'react'
import { connect } from 'react-redux'
import { chooseLocation } from '../actions'

let LocationInput = ({ dispatch }) => {
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
					dispatch(chooseLocation(input.value))
				}}>
				<option value="-1"> -- Your Location --</option>
				<option value="30.2672N,97.7431W">Austin, TX</option>
				<option value="47.6062N,122.3321W">Seattle, WA</option>
				<option value="41.7637N,72.6851W">Hartford, CT</option>
			</select>


		</form>
	)
}
LocationInput = connect()(LocationInput)

export default LocationInput