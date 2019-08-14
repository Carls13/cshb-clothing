import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.styles.scss';
import { ReactComponent as Logo } from './../../assets/crown.svg';

import { auth } from './../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
	<div className="header">
		<Link className="logo-container" to="">
			<Logo className="logo"/>
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/shop">
				CONTACT
			</Link>
			{
				currentUser ? 
					<div className="option" onClick={()=> auth.signOut()}><b>SIGN OUT</b></div>
				:
					<Link className="option" to="/signIn"><b>SIGN IN</b></Link>
			}
		</div>
	</div>
);

const mapStateToProps = state => ({
	currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);