import React, { Component } from 'react';
import { constants } from '../../constants';
import Icon from '../../utils/icons';
import './CreateItemDialog.scss';
import './Dialog.scss';

class CreateItemDialog extends Component {
	constructor(props) {
		super(props);
		this.togglerItemType = this.togglerItemType.bind(this);
		this.onChangeInput = this.onChangeInput.bind(this);
		this.state = {
			type: constants.FOLDER,
			hasSubmenu: false,
			path: this.props.path,
			title: '',
			isValidDate: true
		};
	}

	/**
     * Event handler triggered when item type dom element is toggled.
     * @param {DocumentEvent} event The event is click event object 
     */
	togglerItemType(event) {
		const target = event.target;
		if (target.classList.contains('file')) {
			const folder = target.nextSibling;
			folder.classList.remove('folder-active');
			target.classList.add('file-active');
			this.setState({ type: constants.FILE });
		} else {
			const file = target.previousSibling;
			file.classList.remove('file-active');
			target.classList.add('folder-active');
			this.setState({ type: constants.FOLDER });
		}
	}

	/**
     * EVent handler triggered when input field value is changed
     * @param {DocumentEvent} event The event is change event object 
     */
	onChangeInput(event) {
		const target = event.target;
		const name = target.name;
		if (name === 'created_date') {
			// TODO: improve logic to validate the date.
			if (target.value === '') {
				this.setState({ isValidDate: true });
				return;
			}
			const d = new Date(target.value);
			if (Object.prototype.toString.call(d) === '[object Date]') {
				if (isNaN(d.getTime())) {
					this.setState({ isValidDate: false });
				} else {
					this.setState({ [name]: d.getTime(), isValidDate: true });
				}
			} else {
				this.setState({ isValidDate: false });
			}
			return;
		}
		this.setState({ [name]: target.value });
	}

	render() {
		const { closeHandler = () => {}, handlerSubmit = () => {} } = this.props;

		return (
			<div className="dialog">
				<div style={{ position: 'relative', width: `100%` }}>
					<span className="title">Create new</span>
					<div style={{ display: 'inline' }} onClick={closeHandler}>
						<Icon icon="close" width={25} className="closeIcon" />
					</div>
				</div>
				<div className="type" onClick={this.togglerItemType}>
					<span name="file" className="file">
						File
					</span>
					<span name="file" className="folder folder-active">
						Folder
					</span>
				</div>
				<div className="form-field-wraper">
					<div>
						<input type="text" placeholder="Name" name="title" onChange={this.onChangeInput} />
					</div>
					<div>
						<input type="text" name="created_by" placeholder="Creator" onChange={this.onChangeInput} />
					</div>
					<div>
						<input type="text" name="size" placeholder="Size" onChange={this.onChangeInput} />
					</div>
					<div>
						<input type="text" name="created_date" placeholder="Date" onChange={this.onChangeInput} />
						{!this.state.isValidDate && (
							<div>
								<span style={{ color: 'red' }}>Date Must be (DD/MM/YYYY)</span>
							</div>
						)}
					</div>
					<button
						onClick={() => {
							const newItem = { ...this.state };
							if (newItem.isValidDate) {
								delete newItem['isValidDate'];
								handlerSubmit(newItem);
							}
						}}
					>
						Create
					</button>
				</div>
			</div>
		);
	}
}

export default CreateItemDialog;
