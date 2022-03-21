import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLocations, search } from "../API/API";
import Search from './Search';
import CardList from '../views/CardList';
import PaginationList from '../views/PaginationList';
import '../App.css';

class Locations extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: "",
			highlighted: 1,
			width: window.innerWidth,
		};

		this.submitSearch = this.submitSearch.bind(this);
		this.clickedPage = this.clickedPage.bind(this);
		this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
		this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this);
	}

	componentWillMount() {
		window.addEventListener('keypress', (event) => {
			if (event.keyCode == 13) {
				const click = document.getElementById('searchElement');
				this.submitSearch(event);
				click.click();
			}
		}, false);
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener('keypress', (event) => {
			if (event.keyCode == 13) {
				const click = document.getElementById('searchElement');
				this.submitSearch(event);
				click.click();
			}
		}, false);
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	componentDidMount() {
		this.props.getLocations();
	}

	handleWindowSizeChange() {
		this.setState({ width: window.innerWidth });
	}

	onChangeSearchTerm(event) {
		this.setState({ term: event.target.value });
	}

	submitSearch(event) {
		event.preventDefault();
		this.props.search("location", this.state.term);
	}

	clickedPage(props) {
		this.setState({ highlighted: props });
		this.props.getLocations(props);
		this.forceUpdate();
	}

	render() {
		let tempPageNumber, pageNumber;
		if (this.props.locations.length > 0) {
			tempPageNumber = Array.apply(null, { length: this.props.locations[0].info.pages }).map(Number.call, Number);
			pageNumber = tempPageNumber.map(item => item + 1)
		}
		return (
			<div className="mainBody">
				<Search
					searchName="Dimension"
					searchTerm={this.state.term}
					onChangeSearchTerm={this.onChangeSearchTerm}
					submitSearch={this.submitSearch} />

				{this.props.locations.length > 0 ?
					<CardList type="location" items={this.props.locations} />
					: null}

				{this.props.locations.length > 0 ?
					<PaginationList
						items={pageNumber}
						width={this.state.width}
						highlighted={this.state.highlighted}
						clickedPage={this.clickedPage} />
					: null}
			</div>
		);
	}
}

const mapStateToProps = ({ locations, searchResults }) => {
	return {
		locations: locations,
		searchResults: searchResults,
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getLocations, search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
