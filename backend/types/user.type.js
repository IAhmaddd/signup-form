const { gql } = require('apollo-server');

const userTypeDefs = gql`
	type User {
		id: ID!
		firstName: String!
		lastName: String!
		email: String!
		password: String!
		phone: String!
	}

	type Query {
		getUser(id: ID!): User
		getUsers: [User]
	}

	input UserInput {
		firstName: String!
		lastName: String!
		email: String!
		password: String!
		phone: String!
	}

	type Mutation {
		createUser(user: UserInput): User
	}
`;

module.exports = userTypeDefs;
