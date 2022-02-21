import React from 'react';
import UserRegisterForm from './components/UserRegisterForm';
import { useLazyQuery, } from '@apollo/client';
import GET_USERS from './graphql/queries/getUser.query';
  import { ToastContainer } from 'react-toastify';

const App = () => {
	const [getUsers, { data, loading, error }] = useLazyQuery(GET_USERS);

	React.useEffect(() => {
		getUsers();
	}, []);

	// console.log(data);
		
	return (
		<>
			<ToastContainer/>
			<div className='w-xl p-6 rounded-3 mt-8 mx-auto shadow'>
				<h1 className='text-center mb-4'>Sign up</h1>
				<UserRegisterForm />
			</div>
		</>
	);
};

export default App;