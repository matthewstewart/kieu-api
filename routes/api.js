const User = require('../models/User');
const jwt = require('jsonwebtoken');
if (!process.env.JWT_SECRET){ require('../config/env.js'); }

module.exports = function(app) {

	app.get('/api/dashboard', verify, (req, res) => {
		res.status(200).json({
			message: "User successfully retrieved from the Database.",
			user: res.locals.currentUser || {}
		});
	});

};

function verify(req,res,next) {
	if(!req.token){
		res.status(401).json({
			message: "You do not have access."
		});
		next();
	} else {
		jwt.verify(req.token, process.env.JWT_SECRET, (error, decoded) => {
			if(error){
				console.log(error);
				res.status(401).json({
					message: "You do not have access."
				});
				next();				
			} else {
				let userId = decoded.sub;
				User
				.findOne({'_id': userId})
				.exec((error, user) => {
					if(error || !user){
						res.status(401).json({
							message: "You do not have access."
						});
						next();
					} else {
						res.locals.currentUser = user;
						next();
					}
				});
			}
			
		});
	}
}