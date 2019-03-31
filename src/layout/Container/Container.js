import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveUp, selectFolder } from '../../actions/FolderAction';
import { constants } from '../../constants';
import './Container.scss';
import FileExplorer from './FileExplorer';
import NavigationBar from './NavigationBar';

class Container extends Component {
	render() {
		return (
			<div id="container" onContextMenu={(e) => e.preventDefault()}>
				<NavigationBar {...this.props} />
				<FileExplorer {...this.props} />
			</div>
		);
	}
}

Container.defaultProps = {
	folderPath: constants.RootFolder
};

const mapStateToProps = (state) => ({
	folders: state.folders.items,
	folderPath: state.folder.selected
});

export default connect(mapStateToProps, { selectFolder, moveUp })(Container);
