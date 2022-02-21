const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/.env' });
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./type-defs');
const resolvers = require('./resolvers');
const connectToDb = require('./db/connectDb');

connectToDb();

const server = new ApolloServer({
	typeDefs,
	resolvers,
});


server.listen().then(({ url }) => {
	console.log(`YOUR API IS RUNNING AT: ${url} :)`);
});
