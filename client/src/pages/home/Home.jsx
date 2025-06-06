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
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		getAllUsers(setUsers, setLoading, setError);
	}, []);

	if (loading) return <h2>Loading...</h2>;
	if (error) return <h2>Something Went Wrong!</h2>;
	if (users.length === 0) return <h2>No users</h2>;

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
						<StyledUserDataItem>@{user.username}</StyledUserDataItem>
						<StyledActiveState>
							<StyledDot $active={user.active} />
							<StyledActiveText $active={user.active}>
								{user.active ? 'Active' : 'Inactive'}
							</StyledActiveText>
						</StyledActiveState>
						<StyledDetailsButton to={`/user/${user.userId}`}>
							DETAILS
						</StyledDetailsButton>
					</StyledUserInfoContainer>
				</StyledUserCard>
			))}
		</StyledGeneralCardsContainer>
	);
};

const getAllUsers = async (setUsers, setLoading, setError) => {
	try {
		const users = await getAllData();
		setLoading(false);
		setUsers(users);
	} catch {
		setLoading(false);
		setError(error);
	}
};

export default Home;
