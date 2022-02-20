const Mongoose = require('mongoose');

const connectToDb = async () => {
	try {
		await Mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('MongoDB connected...');
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

module.exports = connectToDb;
