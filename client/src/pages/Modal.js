import React from 'react';

const MODEAL_STYLE = {
	borderRadius: '5%',
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	backgroundColor: '#440083',
	padding: `50px`,
	zIndex: 1000,
};

const OVERPLAY_STYLE = {
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: 'rgba(0,0,0, .7)',
	zindex: 1000,
};

const Modal = ({open, children, onClose}) => {
	if (!open) return null;

	return (
		<>
			<div style={OVERPLAY_STYLE}></div>
			<div style={MODEAL_STYLE}>
				<button onClick={onClose}>Close</button>
				{children}
			</div>
		</>
	);
};

export default Modal;
