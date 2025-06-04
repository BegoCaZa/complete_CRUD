import { useEffect, useState } from 'react';
import { getAllData } from '../../lib/utils/api.js';

const Home = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);
	return (
		<div>
			{users.map(user => (
				<div key={user.userId}>
					<div>
						<img src={user.profilePicture} />
					</div>
					<div>
						<span>{user.fullName}</span>
						<span>{user.email}</span>
						<span>{user.username}</span>
						<div>
							<span>{user.status}</span>
						</div>
						<button>DETAILS</button>
					</div>
				</div>
			))}
		</div>
	);
};

const getAllUsers = async setUsers => {
	const users = await getAllData();
	console.log(users);
	setUsers(users);
};

export default Home;
