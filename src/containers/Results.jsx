import React, { Component } from 'react'
import { connect } from 'react-redux'

class Results extends Component  {
	render() {
		return(
			<div>
				You Could Go To This Place
			</div>
		)
	}
}

export default connect()(Results)
