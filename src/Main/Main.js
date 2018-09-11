import React, { Component } from 'react';
import './Main.css';
import {getStorage} from '../Lib/index.js';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friends: [],
			isAuth: '',
			user: ''
		}
	}
	componentWillMount() {
		this.setState(getStorage(), () => 
			this.state.isAuth === 'false' ? this.props.history.push('auth/') : false
		);
		localStorage.clear();

	}
	render() {
		return (
			<div className='main'>
				<header className='main__title'>
					Пользователь {this.state.user}
				</header>
				<main className='main__content'>
					<header className='main__content-title'>
						Ваши друзья:
						<ul className='main__list'>
							{
								this.state.friends.map((i, index) => {
									return <li key={'iter_' + index} className='main__list-item'>{i.first_name} {i.last_name}</li>
								})
							}
						</ul>
					</header>
				</main>
			</div>
    	);
  	}
}

export default Main;
