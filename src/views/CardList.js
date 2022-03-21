import React, { Component } from 'react';
import Card from './Card';
import '../App.css';

class CardList extends Component {
	render() {
		const array1 = this.props.items;
		const array2 = this.props.items[0].results;
		let season1, season2, season3;
		if(this.props.type === "episode"){
			season1 = array1.filter((item) =>{
				return item.episode.charAt(2) == 1;
			})

			season2 = array1.filter((item) =>{
				return item.episode.charAt(2) == 2;
			})

			season3 = array1.filter((item) =>{
				return item.episode.charAt(2) == 3;
			})
		}

		return (	
			<div>
			{/**********************HEADERS SEASON NUMBER AND DISPLAY EPISODES INFO*******************************/}
				{this.props.type === "episode" ?
					<div className = "containerSeason">
						<div class = "styleTitleSeason"><h4> TEMPORADA 1 </h4></div>
						{season1.map((item) =>{
							return <Card type={this.props.type} key={season1.indexOf(item)} item={item}> </Card> 
						})}

						<div class = "styleTitleSeason"><h4> TEMPORADA 2 </h4></div>
						{season2.map((item) =>{
							return <Card type={this.props.type} key={season2.indexOf(item)} item={item}> </Card> 
						})}

						<div class = "styleTitleSeason"><h4> TEMPORADA 3 </h4></div>
						{season3.map((item) =>{
							return <Card type={this.props.type} key={season3.indexOf(item)} item={item}> </Card> 
						})}
					</div>
				: 
					<div className = "containerSeason">
						{array2.map((item) =>{
							return <Card type={this.props.type} key={array2.indexOf(item)} item={item}> </Card>
						})}
					</div>}
			</div>			
		);
	}
}

export default CardList;