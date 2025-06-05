import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { Link } from 'react-router-dom';

export const StyledGeneralCardsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 20px;
	gap: 20px;
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

export const StyledUserInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 12px;
	margin: 20px 0px;
`;

export const StyledUserName = styled.span`
	font-size: 24px;
	font-weight: 700;
`;

export const StyledUserDataItem = styled.span`
	font-size: 16px;
`;

export const StyledActiveState = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
	align-items: center;
`;

export const StyledDot = styled.div`
	display: flex;
	background-color: ${({ $active }) => ($active ? COLORS.green : COLORS.red)};
	width: 15px;
	height: 15px;
	border-radius: 50%;
`;

export const StyledActiveText = styled.span`
	color: ${({ $active }) => ($active ? COLORS.green : COLORS.red)};
	font-size: 18px;
	font-weight: 500;
`;

export const StyledDetailsButton = styled(Link)`
	appearance: none;
	background-color: transparent;
	padding: 8px 16px;
	border: 1.5px solid ${COLORS.blue};
	border-radius: 10px;
	font-size: 16px;
	font-weight: 700;
	color: ${COLORS.blue};
`;
