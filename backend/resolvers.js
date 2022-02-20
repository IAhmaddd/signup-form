// create signup resolver for mutation
const userResolver = require("./resolvers/user.resolver");

const resolvers = {
    Query: {
        ...userResolver.Query
    },
    Mutation: {
        ...userResolver.Mutation
    }
};

module.exports = resolvers;