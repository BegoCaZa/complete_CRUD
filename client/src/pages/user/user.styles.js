import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { Link } from 'react-router-dom';

export const StyledGeneralContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 20px;
	gap: 20px;

	@media (min-width: 768px) {
		width: 50%;
		margin-inline: auto;
	}
`;

export const StyledUserCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${COLORS.white};
	padding: 20px;
	padding-bottom: 5px;
	border-radius: 20px;
	width: 100%;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

export const StyledImageFrame = styled.div`
	display: flex;
	width: 120px;
	height: 120px;
	border-radius: 50%;
	overflow: hidden;
`;

export const StyledBackButton = styled(Link)`
	appearance: none;
	background-color: transparent;
	padding: 8px 16px;
	border: 1.5px solid ${COLORS.blue};
	border-radius: 10px;
	font-size: 16px;
	font-weight: 700;
	color: ${COLORS.blue};
	align-self: flex-start;
	margin-bottom: 20px;
	cursor: pointer;

	&:hover {
		background-color: ${COLORS.blue};
		color: ${COLORS.white};
	}
`;
