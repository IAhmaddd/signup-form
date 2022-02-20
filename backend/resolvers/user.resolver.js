const User = require('../model/user.model');

const userResolver = {
	Query: {
		getUser: async (_, { id }) => {
			try {
				const user = await User.findById(id);
				return user;
			} catch (err) {
				throw err;
			}
		},

		getUsers: async () => {
			try {
				const users = await User.find();
				return users;
			} catch (err) {
				throw err;
			}
		},
	},

	Mutation: {
		createUser: async (_, { user }) => {
			try {
				const newUser = new User(user);
				const savedUser = await newUser.save();
				return savedUser;
			} catch (err) {
				throw err;
			}
		},
	},
};

module.exports = userResolver;
