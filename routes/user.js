const express = require('express');
const router = express.Router();
const Rti = require('../models/Rti');
const Answer = require('../models/Answer');

router.post('/user/:rti_id', async (req, res) => {
	try {
		const query = await Rti.findOne({ rti_id: req.params.rti_id });
		if (query.length === 0) {
			return res.status(400).json('No RTI Found');
		}
		const email = req.body.email;
		const phone = req.body.phone;
		if (email !== query.email) {
			return res.status(400).json('Please Enter Registered Email');
		}
		if (phone != query.phone) {
			return res.status(400).json('Please Enter Registered Phone Number');
		}
		if (query.status !== 0) {
			const ans = await Answer.findOne({ rti_id: query._id });
			const result = { ...query, answer: ans.answer, doc: ans.doc };
			console.log(ans);
			console.log(result);
			return res.json(result);
		}
		const result = { ...query, answer: '', doc: '' };
		return res.json(result);
	} catch (err) {
		return res.status(400).json({ message: err.message });
	}
});

router.post('/userh-history/:email', async (req, res) => {
	try {
		const query = await Rti.find({ email: req.params.email });
		if (query.length === 0) {
			return res.status(400).json('No RTI History');
		}
		const phone = req.body.phone;
		if (phone != query.phone) {
			return res.status(400).json('Please Enter Registered Phone Number');
		}
		return res.json(query);
	} catch (err) {
		return res.status(400).json({ message: err.message });
	}
});

module.exports = router;
