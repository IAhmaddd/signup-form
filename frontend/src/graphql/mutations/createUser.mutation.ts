import { gql } from '@apollo/client';

const CREATE_USER = gql`
	mutation CreateUser($user: UserInput!) {
		createUser(user: $user) {
			id
			email
			firstName
			lastName
			password
			phone
		}
	}
`;

export default CREATE_USER;
