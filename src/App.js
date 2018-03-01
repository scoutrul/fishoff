import React, { Component } from 'react';
import styled from 'styled-components';
import './app.css';

import HeaderLogo from './HeaderLogo'
const App_styled = styled.div`
	display: flex;
	background-color: #00000a;
	height: 100%;
	min-height: 100vh;
  padding: 40px;
  background-size: 500px;
  background-position-y: 40px;
  background-repeat: no-repeat;
  background-image: url('images/fishoff_hand.png')
`;
const Header_styled = styled.div``;

class App extends Component {
	render() {
		return (
			<App_styled id="App">
				<Header_styled>
					<HeaderLogo/>>
				</Header_styled>
			</App_styled>
		);
	}
}

export default App;
