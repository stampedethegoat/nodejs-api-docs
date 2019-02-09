 var dogapi = require("dogapi");

 var options = {
   api_key: '<YOUR_API_KEY>',
   app_key: '<YOUR_APP_KEY>'
 };

 dogapi.initialize(options);

 var check = "app.ok";
 var hostName = "some.machine";
 var statusMsg = dogapi.WARNING;
 var tags = ['env:test'];

 dogapi.serviceCheck.check(
   check, hostName, statusMsg, tags, function(err, res) {
     console.dir(res);
 });
