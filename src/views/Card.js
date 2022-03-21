import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import '../App.css';


class Card1 extends Component {
	render() {
		const { name, species, location, status, gender, air_date, dimension, type} = this.props.item;
		return (

			<div>

				{/**********DISPLAY CHARACTER*************/}
				{this.props.type === "character" &&
				<Card className="containerCard">
					<CardActionArea className="cardAction">
					<CardMedia
					className=".cardMedia"
					component="img"
					alt={`${name}`}
					height="300"
					image={this.props.item.image}
					/>
						<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{`${name}`}
						</Typography>
						<Typography variant="body2"  component="p" className="detailCharacter">
							{`Genero: ${gender}`} <br />
							{`Especie: ${species}`} <br />
							{`Dimension: ${location.name}`} <br/>
							{`Status: ${status}`}
						</Typography>
						</CardContent>
					</CardActionArea>
				</Card>}


				{/**********DISPLAY EPISODES*************/}
				<div>
					{this.props.type === "episode" &&
						<Card className="containerCardEpisode">
						<CardActionArea className="cardAction">
							<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{this.props.item.episode}
							</Typography>
							<Typography variant="body2"  component="p" className="detailCharacter">
								Nombre:  {` ${this.props.item.name}`}<br/>
								Estreno: {` ${air_date}`}
							</Typography>
							</CardContent>
						</CardActionArea>
					</Card>}
				</div>


				{/**********DISPLAY LOCATION*************/}
				<div>
					{this.props.type === "location" &&
					<Card className="containerCardLocation">
						<CardActionArea className="cardAction">
							<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{`${name}`}
							</Typography>
							<Typography variant="body2"  component="p" className="detailCharacter">
								Tipo:  {`${type}`}<br/>
								DIMENSION: {`${dimension}`}
							</Typography>
							</CardContent>
						</CardActionArea>
					</Card>}
				</div>
				
			</div>
		);
	}
}

export default Card1;