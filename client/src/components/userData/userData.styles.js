import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { Link } from 'react-router-dom';

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
export const StyledUserData = styled.span`
	font-size: 16px;
	font-weight: 700;
`;

export const StyledUserDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-self: flex-start;
	gap: 10px;
	margin-bottom: 20px;
`;

export const StyledDetail = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
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

export const StyledEditingButtons = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	width: 100%;
	margin-bottom: 20px;
`;

export const StyledEditButton = styled.button`
	appearance: none;
	background-color: transparent;
	padding: 8px 16px;
	border: 1.5px solid ${COLORS.blue};
	border-radius: 10px;
	font-size: 16px;
	font-weight: 700;
	color: ${COLORS.blue};
	cursor: pointer;

	&:hover {
		background-color: ${COLORS.blue};
		color: ${COLORS.white};
	}
`;

export const StyledDeleteButton = styled(Link)`
	appearance: none;
	background-color: transparent;
	padding: 8px 16px;
	border: 1.5px solid ${COLORS.red};
	border-radius: 10px;
	font-size: 16px;
	font-weight: 700;
	color: ${COLORS.red};
	cursor: pointer;

	&:hover {
		background-color: ${COLORS.red};
		color: ${COLORS.white};
	}
`;
