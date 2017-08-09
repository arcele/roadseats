
var env = process.env.NODE_ENV || 'development';
const express = require('express');
const app     = express(); 
app.set('port', (process.env.PORT || 1667));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
}

require('./routes')(app)

app.listen(app.get('port'), function() {
  console.log('app is running on port', app.get('port'));
});
