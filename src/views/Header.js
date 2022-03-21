import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../assets/img/logo.png';
import '../App.css';


class Header extends Component {

	constructor(props) {
		super(props);

		this.state = {
			width: window.innerWidth,
			modal: false,
			type: false,
		}
		this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
	}

	componentWillMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange() {
		this.setState({ width: window.innerWidth });
	}

	render() {
		return (
			<div className = "Header">
				<div className="imgHeader">
					<a href="/"><img src={logo} alt="Logo" className = "imgAdjust"/> </a>
				</div>
				<AppBar  position="static">
					<Toolbar className = "toolbar">
					<Tabs className = "tabs">
						<Tab className = "tab" href="/" label="Home/Personajes" />
						<Tab className = "tab" href="/episodes" label="Episodios" />
						<Tab className = "tab" href="/locations" label="Dimensiones" />
					</Tabs>
					</Toolbar>
				</AppBar>			
			</div>	
		);
		
		
	}
}

export default Header;