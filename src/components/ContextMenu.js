import React, { Component } from 'react';
import './ContextMenu.scss';
class ContextMenu extends Component {
	render() {
		const { x: left, y: top } = this.props;
		return (
			<div style={{ left, top }} className="context-menu-wrapper">
				{this.props.children}
			</div>
		);
	}
}
export default ContextMenu;
