import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import Container from './layout/Container/Container';
import NavigationSideBar from './layout/Navigation/NavigationSideBar';
import { store } from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="wrapper">
					<NavigationSideBar />
					<Container />
				</div>
			</Provider>
		);
	}
}

export default App;
