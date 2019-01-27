var express = require('express');

var ParseServer = require('parse-server').ParseServer;

var app = express();

var api = new ParseServer({

  databaseURI: process.env.mongodb://azeem:12345azeem@ds031661.mlab.com:31661/azeem-app,

  appId: process.env.APPLICATION_ID,

  masterKey: process.env.MASTER_KEY,

  serverURL: process.env.http://localhost:1337/parse,

});

app.use('/parse', api);

app.listen(process.env.PORT || 1337, function() {

  console.log('parse-server-example running on port ' + process.env.PORT);

});
