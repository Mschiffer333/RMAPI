import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEpisodes } from "../API/API";
import CardList from '../views/CardList';
import '../App.css';
class Episodes extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: "",
		};

		this.submitSearch = this.submitSearch.bind(this);
		this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
		this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this);
	}

	componentDidMount() {
		this.props.getEpisodes();
		this.props.getEpisodes(2);
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	onChangeSearchTerm(event) {
		this.setState({ term: event.target.value });
	}

	handleWindowSizeChange() {
		this.setState({ width: window.innerWidth });
	}

	submitSearch(event) {
		event.preventDefault();
		this.props.search("episodes", this.state.term);
	}

	render() {
		return (
			<div className="mainBody">
				{this.props.episodes.length > 0 ?
					<CardList type="episode" items={this.props.episodes} />
				: null}

			</div>
		);
	}
}

const mapStateToProps = ({ episodes }) => {
	return { episodes };
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getEpisodes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
