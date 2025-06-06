import {
	StyledActiveState,
	StyledActiveText,
	StyledDetail,
	StyledDot,
	StyledUserData,
	StyledUserDataItem,
	StyledUserDetails,
	StyledUserInfoContainer,
	StyledUserName,
	StyledEditingButtons,
	StyledDeleteButton,
	StyledEditButton
} from './userData.styles.js';

const UserData = ({ user, handleDelete, setEditingPage }) => {
	return (
		<>
			<StyledUserInfoContainer>
				<StyledUserName>{user.fullName}</StyledUserName>
				<StyledUserDataItem>{user.email}</StyledUserDataItem>
				<StyledUserDataItem>@{user.username}</StyledUserDataItem>
			</StyledUserInfoContainer>
			<StyledUserDetails>
				<StyledActiveState>
					<StyledDot $active={user.active} />
					<StyledActiveText $active={user.active}>
						{user.active ? 'Active' : 'Inactive'}
					</StyledActiveText>
				</StyledActiveState>
				<StyledDetail>
					<StyledUserDataItem>Gender:</StyledUserDataItem>
					<StyledUserData>{user.gender}</StyledUserData>
				</StyledDetail>
				<StyledDetail>
					<StyledUserDataItem>Date of Birth:</StyledUserDataItem>
					<StyledUserData>{user.dateOfBirth}</StyledUserData>
				</StyledDetail>
				<StyledDetail>
					<StyledUserDataItem>Phone Number:</StyledUserDataItem>
					<StyledUserData>{user.phoneNumber}</StyledUserData>
				</StyledDetail>
			</StyledUserDetails>
			<StyledEditingButtons>
				<StyledEditButton onClick={() => setEditingPage(true)}>
					EDIT
				</StyledEditButton>
				<StyledDeleteButton onClick={handleDelete}>DELETE</StyledDeleteButton>
			</StyledEditingButtons>
		</>
	);
};
export default UserData;
