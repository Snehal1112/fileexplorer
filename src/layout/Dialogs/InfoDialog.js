import React, { Component } from 'react';
import { constants } from '../../constants';
import File from '../../images/file.png';
import Folder from '../../images/folder.png';
import Icon from '../../utils/icons';
import './Dialog.scss';
import './InfoDialog.scss';

class InfoDialog extends Component {
	/**
   * Function which is used to formate the date 
   * @param {Date} date The date is Date object
   */
	formateDate(date) {
		const postFix = (date) => {
			if (date > 3 && date < 21) return 'th'; // thanks kennebec
			switch (date % 10) {
				case 1:
					return 'st';
				case 2:
					return 'nd';
				case 3:
					return 'rd';
				default:
					return 'th';
			}
		};
		return `${date.getDate()}${postFix(date.getDate())} ${date.toLocaleDateString('en', {
			month: 'short'
		})}, ${date.getFullYear()}`;
	}

	render() {
		const { title, closeHandler = () => {}, type, size, created_by, created_date } = this.props;

		const getImage = (imgType) => {
			switch (imgType) {
				case constants.FOLDER:
					return Folder;
				case constants.FILE:
					return File;
				default:
					console.log('invalid folder type ');
			}
		};

		return (
			<div className="dialog">
				<div style={{ position: 'relative', width: `100%` }}>
					<span className="title">{constants.FOLDER ? 'Folder' : 'File'} info</span>
					<div style={{ display: 'inline' }} onClick={closeHandler}>
						<Icon icon="close" width={25} className="closeIcon" />
					</div>
				</div>
				<div className="icon">
					<img src={getImage(type)} alt="ExplorerItem" />
				</div>
				<table style={{ width: `100%` }}>
					<tbody>
						<tr>
							<td className="label">Name:</td>
							<td className="value">{title}</td>
						</tr>
						<tr>
							<td className="label">Size:</td>
							<td className="value">{size}</td>
						</tr>
						<tr>
							<td className="label">Creator name:</td>
							<td className="value">{created_by}</td>
						</tr>
						<tr>
							<td className="label">Creator date:</td>
							<td className="value">{this.formateDate(new Date(created_date))}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default InfoDialog;
