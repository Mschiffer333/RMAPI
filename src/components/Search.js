import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import '../App.css'

class Search extends Component {
	render() {
		return (
			<div onSubmit = {this.props.submitSearch} className="searchElements">
				<TextField 
					className="textField"
					id="filled-search" 
					label={`Buscar ${this.props.searchName}`}
					value={this.props.searchTerm}
					onChange={this.props.onChangeSearchTerm} 
					type="search" 
					variant="filled" 
				/>
				<button
					onClick={this.props.submitSearch}
					type="submit"
					className="btnSubmit">
					<Link to="/search" id="searchElement" className="linkTo">
						Buscar
					</Link>
				</button>
			</div> 
		);
	}
}

export default Search;