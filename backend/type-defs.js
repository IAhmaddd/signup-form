const {gql} = require('apollo-server');
const userTypeDefs = require('./types/user.type');

const typeDefs = gql`
	${userTypeDefs}
`;

module.exports = typeDefs;