 var dogapi = require("dogapi");
 var options = {
   api_key: "api_key",
   app_key: "app_key"
};

// Create a Comment
 dogapi.initialize(options);
 dogapi.comment.create("a comment message", function(err, res){
   console.dir(res);
 });


// Update a Comment
var dogapi = require("dogapi");
var options = {
  api_key: "api_key",
  app_key: "app_key"
};
dogapi.initialize(options);
dogapi.comment.update(1234, "new message", function(err, res){
  console.dir(res);
});

// Delete a Comment
var dogapi = require("dogapi");
var options = {
  api_key: "api_key",
  app_key: "app_key"
};
dogapi.initialize(options);
dogapi.comment.remove(1234, function(err, res){
  console.dir(res);
});
