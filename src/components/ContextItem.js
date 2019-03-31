import React from 'react';

const ContextItem = (props) => {
	const { text, style = {}, handler = () => {} } = props;
	return (
		<div style={style} className="menu-item" onClick={handler}>
			<span>{text}</span>
		</div>
	);
};
export default ContextItem;
