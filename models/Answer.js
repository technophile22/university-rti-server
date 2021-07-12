const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema

const AnswerSchema = new Schema({
	rti_id: { type: String, default: '' },
	answer: {
		type: String,
		required: true,
	},
	admin_id: {
		type: String,
		default: '',
	},
	doc: {
		type: String,
		default: '',
	},
});

module.exports = mongoose.model('Answer', AnswerSchema);
