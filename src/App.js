import React, { Component } from 'react';
import styled from 'styled-components';
import './app.css';

import HeaderLogo from './HeaderLogo'
const App_styled = styled.div`

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
