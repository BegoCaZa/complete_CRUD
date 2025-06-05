import { useEffect, useState } from 'react';
import { deleteDataById, getDataById } from '../../lib/utils/api';
import { useParams } from 'react-router-dom';
import {
	StyledBackButton,
	StyledGeneralContainer,
	StyledImageFrame,
	StyledUserCard
} from './user.styles';
import UserData from '../../components/userData/UserData';
import EditingPage from '../../components/editingPage/EditingPage';

const User = () => {
	const { id } = useParams();
	const [user, setUser] = useState([]);
	const [editingPage, setEditingPage] = useState(false);

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
				{!editingPage ? (
					<UserData
						user={user}
						setEditingPage={setEditingPage}
						userId={id}
						setUser={setUser}
						handleDelete={handleDelete}
					/>
				) : (
					<EditingPage
						user={user}
						setEditingPage={setEditingPage}
						userId={id}
						setUser={setUser}
					/>
				)}
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
