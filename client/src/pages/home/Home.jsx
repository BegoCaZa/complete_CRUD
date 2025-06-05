import { useEffect, useState } from 'react';
import { getAllData } from '../../lib/utils/api.js';
import {
	StyledGeneralCardsContainer,
	StyledUserCard,
	StyledImageFrame,
	StyledUserInfoContainer,
	StyledUserName,
	StyledUserDataItem,
	StyledActiveState,
	StyledDot,
	StyledActiveText,
	StyledDetailsButton
} from './home.styles.js';

const Home = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);
	return (
		<StyledGeneralCardsContainer>
			{users.map(user => (
				<StyledUserCard key={user.userId}>
					<StyledImageFrame>
						<img src={user.profilePicture} />
					</StyledImageFrame>
					<StyledUserInfoContainer>
						<StyledUserName>{user.fullName}</StyledUserName>
						<StyledUserDataItem>{user.email}</StyledUserDataItem>
						<StyledUserDataItem>{user.username}</StyledUserDataItem>
						<StyledActiveState>
							<StyledDot $active={user.active} />
							<StyledActiveText $active={user.active}>
								{user.active ? 'Active' : 'Inactive'}
							</StyledActiveText>
						</StyledActiveState>
						<StyledDetailsButton>DETAILS</StyledDetailsButton>
					</StyledUserInfoContainer>
				</StyledUserCard>
			))}
		</StyledGeneralCardsContainer>
	);
};

const getAllUsers = async setUsers => {
	const users = await getAllData();
	console.log(users);
	setUsers(users);
};

export default Home;
