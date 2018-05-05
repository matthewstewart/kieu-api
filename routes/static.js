module.exports = function(app) {
	
	// landing page route
	app.get("/", (req, res) => {
		let jsonResponse = {
			message: "Welcome to the Kieu Salon API."
		};
		res.json(jsonResponse);
	});
	
};	