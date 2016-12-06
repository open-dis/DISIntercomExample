var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('content')).listen(8282, function() {
  console.log('simple static web server running on 8282, serving content from content directory...');
  });

