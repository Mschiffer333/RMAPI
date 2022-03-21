import React, { Component } from 'react';
import CirclePage from './CirclePage';



class PaginationList extends Component {
	render() {
		return (
			<div className = "containerPagination">
				{this.props.items.map((item) => {
					return (
						<div>
							<CirclePage
								highlighted={this.props.highlighted}
								key={this.props.items.indexOf(item)}
								item={item}
								current={this.props.items.indexOf(item) + 1}
								clickedPage={this.props.clickedPage}/>
						</div>
					);
				})}
			</div>
		);
	}
}

export default PaginationList;