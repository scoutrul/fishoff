import React from 'react';
import styled from 'styled-components';

const Logo_styled = styled.div`
	width: 68px;
	color: #fff;
	img {
		max-width: 100%;
	}
	header {
		font-size: 140%;
		span {
			display: block;
			color: #ffebce;
			font-family: 'Roboto Mono', monospace;
			font-size: 180%;
		}
	}
`;

const LogoStyled = () => (
	<Logo_styled>
		<img src={'images/logo.svg'} alt="logo" />
		<header>
			поставка
			<span>РЫБЫ</span>
		</header>
	</Logo_styled>
);

export default LogoStyled;
