module.exports = (app, config) => {
	app.get('/home', function(req, res){
	  res.send('working');
	});
}