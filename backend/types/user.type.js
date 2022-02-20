const { gql } = require('apollo-server');

const userTypeDefs = gql`
	type User {
		id: ID!
		name: String!
		email: String!
		firstName: String!
		lastName: String!
		password: String!
		phone: String!
	}

	type Query {
		getUser(id: ID!): User
		getUsers: [User]
	}

	input UserInput {
		name: String!
		email: String!
		firstName: String!
		lastName: String!
		password: String!
		phone: String!
	}

	type Mutation {
		createUser(user: UserInput): User
	}
`;

module.exports = userTypeDefs;
