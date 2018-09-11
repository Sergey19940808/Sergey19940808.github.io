import React, { Component } from 'react';
import './Auth.css';
import { pathAuth } from '../Config/config.js';

class Auth extends Component {
    auth = () => {
        console.log(pathAuth);
        //window.location = pathAuth;
    }
	render() {
		return (
			<div className='auth'>
				<header className='auth__title' onClick={this.auth}>
					Авторизоваться
				</header>
			</div>
    	);
  	}
}

export default Auth;