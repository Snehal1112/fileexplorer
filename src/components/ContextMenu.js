import React, { Component } from 'react';
import './ContextMenu.scss';

class ContextMenu extends Component {
	constructor(props) {
		super(props);
		this.contextMenu = React.createRef();
	}

	componentDidMount() {
		this.props.refs(this.contextMenu.current);
	}

	render() {
		const { x: left, y: top } = this.props;
		return (
			<div style={{ left, top }} ref={this.contextMenu} className="context-menu-wrapper">
				{this.props.children}
			</div>
		);
	}
}
export default ContextMenu;
