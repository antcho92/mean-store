var express = require('express'),
    port = process.env.PORT || 8080,
    path = require('path'),
    bp = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bp.json());

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
