const mongoose = require('mongoose');
const { string } = require('@hapi/joi');

const schema = new mongoose.Schema({
	/* Credentials */

	name: {
		type: String,
		require: true
	},

	email: {
		type: String,
		required: true,
		unique: true
	},

	password: {
		type: String,
		required: true
	},

	/* For expiring JWTs */
	sessions: {
		type: Array,
		required: true,
		default: []
	},

	/* Password resets */
	resetPasswordToken: {
		type: String,
		default: null
	},

	resetPasswordTokenExpires: {
		type: Date,
		required: true,
		default: Date.now
	}
});

module.exports = mongoose.model('User', schema);
