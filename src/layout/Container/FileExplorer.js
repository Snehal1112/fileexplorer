import React, { Component } from 'react';
import ContextItem from '../../components/ContextItem';
import ContextMenu from '../../components/ContextMenu';
import ExplorerItem from '../../components/ExplorerItem';
import { constants } from '../../constants';
import CreateItemDialog from '../Dialogs/CreateItemDialog';
import Dialog from '../Dialogs/Dialog';
import InfoDialog from '../Dialogs/InfoDialog';
import './FileExplorer.scss';

class FileExplorer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showContextMenu: false,
			position: {
				x: 0,
				y: 0
			},
			selectedItem: undefined,
			showDialog: false,
			showInfoDialog: false,
			showCreateDialog: false
		};

		this.onClickItem = this.onClickItem.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.onClickOpen = this.onClickOpen.bind(this);
		this.onClickGetInfo = this.onClickGetInfo.bind(this);
		this.onClickDelete = this.onClickDelete.bind(this);
		this.closeHandler = this.closeHandler.bind(this);
		this.showCreateItemDialog = this.showCreateItemDialog.bind(this);
		this.onCreateItem = this.onCreateItem.bind(this);
	}

	componentDidMount() {
		document.addEventListener('click', this.handleClick);
	}

	/**
	 * Event handler called when user click on body of the application.
	 * handler is used to hide the context menu.
	 * @param {*} event
	 */
	handleClick(event) {
		const { showContextMenu } = this.state;
		const wasOutside = event.target.contains(this.root);
		if (wasOutside && showContextMenu) {
			this.setState({ showContextMenu: false });
		}
	}

	/**
	 * Event handler triggered when folder/file item was clicked
	 *
	 * @param {Object} event The event which triggered this handler.
	 * @param {*} item The item represent as a folder or file item.
	 */
	onClickItem(event, item) {
		if (event.buttons === 2) {
			event.preventDefault();
			this.setState({
				selectedItem: item,
				showContextMenu: true,
				position: { x: event.clientX, y: event.clientY }
			});
			return;
		}
		if (item.type === constants.FOLDER) {
			this.props.selectFolder(`${item.path}/${item.title}`);
		}
	}

	/**
	 * Function is used to add newly created folder or file item.
	 * @param {Object} item The item which contains the create folder/file 
	 * item info.
	 */
	onCreateItem(item) {
		this.props.addItem(item);
		this.setState({
			showContextMenu: false,
			showDialog: false,
			showInfoDialog: false,
			showCreateDialog: false
		});
	}

	/**
	 * Function is used to show the "create new" item popup dialog. 
	 * @param {DocumentEvent} event The event is click event object
	 */
	showCreateItemDialog(event) {
		if (event.buttons === 2) {
			event.preventDefault();
			return;
		}
		this.setState({
			showContextMenu: false,
			showDialog: true,
			showInfoDialog: false,
			showCreateDialog: true
		});
	}

	/**
	 * Event handler called when open context menu item is clicked.
	 * it will navigate to the selected folder.
	 */
	onClickOpen() {
		const { selectedItem } = this.state;
		if (selectedItem.type === constants.FOLDER) {
			this.props.selectFolder(`${selectedItem.path}/${selectedItem.title}`);
		}

		this.setState({ showContextMenu: false, showDialog: false });
	}

	/**
	 * Event handler triggered when `Get Info` context menu item was clicked.
	 * it will show the `Info dialog` popups dialog.
	 */
	onClickGetInfo() {
		this.setState({
			showContextMenu: false,
			showDialog: true,
			showInfoDialog: true,
			showCreateDialog: false
		});
	}

	/**
	 * Event handler triggered when `Delete` context menu item was clicked.
	 * it will delete the selected item.
	 * @param {Object} event The Event which triggered this handler.
	 */
	onClickDelete() {
		const { selectedItem } = this.state;
		this.props.deleteItem(`${selectedItem.path}/${selectedItem.title}`);
		this.setState({
			showContextMenu: false,
			showDialog: false,
			showInfoDialog: false,
			showCreateDialog: false
		});
	}

	/**
	 * Function is used to close the info dialog.
	 */
	closeHandler() {
		this.setState({ showDialog: false });
	}

	render() {
		const { folders, folderPath } = this.props;
		// Recursive function which used to find the
		// folder from a nested array.
		const getFolders = (path, folders) => {
			if (path === constants.RootFolder) {
				return folders;
			}

			for (let folder of folders) {
				if (folder.type === constants.FILE) {
					continue;
				}
				if (path === `${folder.path}/${folder.title}`) {
					return folder.hasSubmenu ? folder.submenu : [];
				}
				if (folder.hasSubmenu) {
					const result = getFolders(path, folder.submenu);
					if (result) {
						return result;
					}
				}
			}
		};

		return (
			<div className="file-container">
				{getFolders(folderPath, folders).map((item, index) => {
					return <ExplorerItem key={index} {...item} clickHandler={this.onClickItem} />;
				})}
				<ExplorerItem
					{...{
						hasSubmenu: false,
						title: null,
						type: constants.CREATE_NEW,
						path: 'root'
					}}
					clickHandler={this.showCreateItemDialog}
				/>
				{this.state.showContextMenu && (
					<ContextMenu
						{...this.state.position}
						refs={(ref) => {
							this.root = ref;
						}}
					>
						<ContextItem text="Open" handler={this.onClickOpen} />
						<ContextItem text="Get info" handler={this.onClickGetInfo} />
						<ContextItem text="Delete" handler={this.onClickDelete} style={{ color: '#FF5942' }} />
					</ContextMenu>
				)}
				{this.state.showDialog && (
					<Dialog>
						{this.state.showInfoDialog && (
							<InfoDialog {...this.state.selectedItem} closeHandler={this.closeHandler} />
						)}
						{this.state.showCreateDialog && (
							<CreateItemDialog
								path={this.props.folderPath}
								handlerSubmit={this.onCreateItem}
								closeHandler={this.closeHandler}
							/>
						)}
					</Dialog>
				)}
			</div>
		);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClick);
	}
}

export default FileExplorer;
