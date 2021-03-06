var restify = require('restify');
var builder = require('botbuilder');
process.env.MICROSOFT_APP_ID = '1ed8d5b8-45e8-4b05-9756-2b64cc1e588e'
process.env.MICROSOFT_APP_PASSWORD = 'KFEAwm191s65Lh0jM652Vmu'

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
    session.send("You said: %s", session.message.text);
    session.say("Adam","Adam");
});
