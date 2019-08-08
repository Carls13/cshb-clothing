import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, handleClick, isGoogleSignIn, ...otherProps })=>(
	<button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} onClick={handleClick}>
		{children}
	</button>
);

export default CustomButton;