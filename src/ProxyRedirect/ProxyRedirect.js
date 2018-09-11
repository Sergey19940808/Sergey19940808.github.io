import React, { Component } from 'react';
import {setStorage, setStorageDate} from '../Lib/index.js';

class ProxyRedirect extends Component {
    componentWillMount() {
        // init vars
        let paramToken = window.location.hash.match(/[A-Za-z0-9]/ig).filter((i, index) => index >= 11 && index <= 95);
        let paramUserId = window.location.hash.match(/[A-Za-z0-9]/ig).filter((i, index) => index >= 116 && index <= 124);
        
        let accessToken = paramToken.reduce((acc, iter) => { return acc += iter });
        let isAuth = 'true';
        let userId = paramUserId.reduce((acc, iter) => { return acc += iter });

        // set sync store
        setStorage(accessToken, isAuth, userId);

        // set sync store date
        setStorageDate();

        // redirect to main page
        window.location = '/';
            
    }
	render() {
		return (
			<div className='auth'>
				<header className='auth__title' onClick={this.auth}>
					Пожалуйста подождите...
				</header>
			</div>
    	);
  	}
}

export default ProxyRedirect;