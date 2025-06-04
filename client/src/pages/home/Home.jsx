import { useEffect, useState } from 'react';
import { getAllData } from '../lib/utils/api.js';

const Home = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);
	return (
		<>
			<h2>HOME</h2>
		</>
	);
};

const getAllUsers = async setUsers => {
	const users = await getAllData();
	setUsers(users);
};

export default Home;
