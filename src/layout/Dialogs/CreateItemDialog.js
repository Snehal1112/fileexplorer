import React, { Component } from 'react';
import Icon from '../../utils/icons';
import './CreateItemDialog.scss';
import './Dialog.scss';

class CreateItemDialog extends Component {
	constructor(props) {
		super(props);
		this.togglerItemType = this.togglerItemType.bind(this);
	}

	togglerItemType(event) {
		const target = event.target;
		if (target.classList.contains('file')) {
			const folder = target.nextSibling;
			folder.classList.remove('folder-active');
			target.classList.add('file-active');
		} else {
			const file = target.previousSibling;
			file.classList.remove('file-active');
			target.classList.add('folder-active');
		}
	}

	render() {
		const { closeHandler = () => {} } = this.props;

		return (
			<div className="dialog">
				<div style={{ position: 'relative', width: `100%` }}>
					<span className="title">Create new</span>
					<div style={{ display: 'inline' }} onClick={closeHandler}>
						<Icon icon="close" width={25} className="closeIcon" />
					</div>
				</div>
				<div className="type" onClick={this.togglerItemType}>
					<span className="file">File</span>
					<span className="folder folder-active">Folder</span>
				</div>
				<div className="form-field-wraper">
					<div>
						<input type="text" placeholder="Name" />
					</div>
					<div>
						<input type="text" placeholder="Creator" />
					</div>
					<div>
						<input type="text" placeholder="Size" />
					</div>
					<div>
						<input type="text" placeholder="Date" />
					</div>
					<button>Create</button>
				</div>
			</div>
		);
	}
}

export default CreateItemDialog;
