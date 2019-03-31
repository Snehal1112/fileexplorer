import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectFolder } from '../../actions/FolderAction';
import { getFoldersList } from '../../actions/ListFoldersAction';
import './NavigationSideBar.scss';
import NavItem from './NavItem';

class NavigationSideBar extends Component {
	componentDidMount() {
		this.props.getFoldersList();
	}

	render() {
		return (
			<nav id="sidebar">
				<div className="sidebar-header">
					<span>Root</span>
				</div>
				<NavItem {...this.props} />
			</nav>
		);
	}
}

NavigationSideBar.defaultProps = {
	folders: []
};

const mapStateToProps = (state) => ({
	folders: state.folders.items,
	folderPath: state.folder.selected
});

export default connect(mapStateToProps, { getFoldersList, selectFolder })(NavigationSideBar);
