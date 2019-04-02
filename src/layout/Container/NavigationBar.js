import React, { Component, Fragment } from 'react';
import logo from '../../images/arrow-green-circle.png';
import Icon from '../../utils/icons';

class NavigationBar extends Component {
	/**
	 * Event handler which called when up arrow icon 
	 * was clicked. function is used to navigate to 
	 * parent directory.
	 */
	onClickUpArrow = () => {
		const { folderPath } = this.props;
		let path = folderPath.split('/');
		if (path.length === 1) {
			return;
		}
		path.pop();
		this.props.moveUp(path.join('/'));
	};
	render() {
		const { folderPath: path = 'root' } = this.props;
		return (
			<nav className="navbar">
				<div className="left-navitems">
					<img src={logo} alt="uparrowe" onClick={this.onClickUpArrow} />
					<div className="navPath">
						{path !== 'root' ? (
							<Fragment>
								<span className="path">
									{`${path.split('/').splice(0, path.split('/').length - 1).join(` / `)} / `}
								</span>
								<span className="currentFolder">{path.split('/').pop()}</span>
							</Fragment>
						) : (
							<span className="currentFolder">{path}</span>
						)}
					</div>
				</div>
				<div className="right-navitems">
					<Icon className="search-icon" icon="search" width={20} />
					<input className="searchField" type="text" placeholder="Search for anything" />
				</div>
			</nav>
		);
	}
}
export default NavigationBar;
