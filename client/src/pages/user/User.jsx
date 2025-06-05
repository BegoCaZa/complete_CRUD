import { useEffect, useState } from 'react';
import { deleteDataById, getDataById } from '../../lib/utils/api';
import { useParams } from 'react-router-dom';
import {
	StyledActiveState,
	StyledActiveText,
	StyledBackButton,
	StyledDetail,
	StyledDot,
	StyledGeneralContainer,
	StyledImageFrame,
	StyledUserCard,
	StyledUserData,
	StyledUserDataItem,
	StyledUserDetails,
	StyledUserInfoContainer,
	StyledUserName,
	StyledEditingButtons,
	StyledDeleteButton,
	StyledEditButton
} from './user.styles';

const User = () => {
	const { id } = useParams();
	const [user, setUser] = useState([]);

	useEffect(() => {
		getUser(setUser, id);
	}, []);

	const handleDelete = () => {
		deleteUser(id);
	};

	return (
		<StyledGeneralContainer>
			<StyledUserCard key={user.userId}>
				<StyledBackButton to={`/`}>BACK TO USERS</StyledBackButton>
				<StyledImageFrame>
					<img src={user.profilePicture} />
				</StyledImageFrame>
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
					<StyledEditButton>EDIT</StyledEditButton>
					<StyledDeleteButton to={`/`} onClick={handleDelete}>
						DELETE
					</StyledDeleteButton>
				</StyledEditingButtons>
			</StyledUserCard>
		</StyledGeneralContainer>
	);
};

const getUser = async (setUser, id) => {
	const user = await getDataById(id);
	console.log(user);
	setUser(user);
};

const deleteUser = async id => {
	const deletedUser = await deleteDataById(id);
	console.log(deletedUser);
};
export default User;
