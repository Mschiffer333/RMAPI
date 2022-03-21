import React, { Component } from 'react';
import '../App.css';

class CirclePage extends Component {
	render() {
{/*****************HIGHLIGHT THE CURRENT PAGE, CHANGE COLOR WHEN IS SELECTED*************************/}
		return (
			<div className="circlePage"
				style = {this.props.highlighted == this.props.current ? { background: '#008040', color: 'white' } : null}
				onClick = {this.props.clickedPage.bind(null, this.props.current)}>
				{this.props.item}
			</div>
		);
	}
}

export default CirclePage;