import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from "../API/API";
import CardList from '../views/CardList';
import PaginationList from '../views/PaginationList';

class SearchResults extends Component {
	constructor(props) {
		super(props);
		this.state = {
			highlighted: 1,
			type: "",
			term: null,
		}
		this.clickedPage = this.clickedPage.bind(this);
		this.setTheState = this.setTheState.bind(this);
	}

	stripName(name) {
		const searchCharacters = name.substring(name.lastIndexOf('=') + 1);

		if(this.state.term == null) {
			this.setState({ term: searchCharacters });
		}
		return searchCharacters;
	}

	clickedPage(props) {
		this.setState({ highlighted: props });
		this.props.search(null, null, this.props.searchResults[0].info.next);
	}

	setTheState(type, term) {
		this.setState({ type: type, term: term });
	}

	render() {
		let tempPageNumber, pageNumber, searchTerm;
		if(this.props.searchResults.length > 0 && !!this.props.searchResults[0].results[0].dimension) {
			tempPageNumber = Array.apply(null, {length: this.props.searchResults[0].info.pages}).map(Number.call, Number);
			pageNumber = tempPageNumber.map(item =>  item + 1 );
			searchTerm = this.stripName(this.props.searchResults[0].info.next);
		} else if (this.props.searchResults.length > 0 && this.props.searchResults[0].results[0].gender) {
			tempPageNumber = Array.apply(null, {length: this.props.searchResults[0].info.pages}).map(Number.call, Number);
			pageNumber = tempPageNumber.map(item =>  item + 1 );
			searchTerm = this.stripName(this.props.searchResults[0].info.next);
		}

		return (
			<div className="mainBody">
				{this.props.searchResults.length > 0 && <h1> {`Resultado de su búsqueda: "${searchTerm}"`}</h1>}

				{this.props.searchResults.length > 0 && this.props.searchResults[0].results[0].name ?
					<div>
						<CardList type="character" items={this.props.searchResults} />
						{this.props.searchResults.length > 0 ?
							<PaginationList
								items={pageNumber}
								highlighted={this.state.highlighted}
								clickedPage={this.clickedPage}/>
							: null}
					</div>
					: null}

				{this.props.searchResults.length > 0 && this.props.searchResults[0].results[0].air_date ?
					<div>
						<CardList type="episode" items={this.props.searchResults} />
					</div>
					: null}

				{this.props.searchResults.length > 0 && this.props.searchResults[0].results[0].dimension ?
					<div>
						<CardList type="location" items={this.props.searchResults} />
						{this.props.searchResults.length > 0 ?
							<PaginationList
								items={pageNumber}
								highlighted={this.state.highlighted}
								clickedPage={this.clickedPage}/>
							: null}
					</div>
					: null}
			</div>
		);
	}
}

const mapStateToProps = ({ searchResults }) => {
	return { searchResults };
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ search }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);