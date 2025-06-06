import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 16px;
	width: 100%;
`;
export const StyledInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const StyledLabel = styled.label`
	font-weight: bold;
	color: #333;
`;

export const StyledCheckbox = styled.input`
	margin-right: 8px;
`;

export const StyledInput = styled.input`
	padding: 12px;
	border: 1px solid #ddd;
	border-radius: 4px;
	font-size: 16px;
`;

export const StyledSaveButton = styled.button`
	background: ${COLORS.blue};
	color: ${COLORS.white};
	border: none;
	padding: 12px 24px;
	border-radius: 4px;
	cursor: pointer;
`;

export const StyledCancelButton = styled.button`
	background: ${COLORS.red};
	color: ${COLORS.white};
	border: none;
	padding: 12px 24px;
	border-radius: 4px;
	cursor: pointer;
`;

export const StyledErrorMessage = styled.span`
	color: ${COLORS.red};
	font-size: 14px;
`;

export const StyledButtonContainer = styled.div`
	display: flex;
	gap: 16px;
	margin-top: 16px;
`;
