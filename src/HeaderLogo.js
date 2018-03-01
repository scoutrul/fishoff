import React from 'react';
import styled from 'styled-components';

const Logo_styled = styled.div`
	width: 68px;
	color: #fff;
	img {
		max-width: 100%;
	}
	header {
		span {
			display: block;
			color: #ffebce;
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
