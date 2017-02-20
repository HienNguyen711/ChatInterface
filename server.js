//start server....
var webpack = require('webpack');
var WebPackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


var port = process.env.PORT || 8080;
new WebPackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(port, 'localhost', function(err, result){
  if(err){
    return console.log(err);
  }

  console.log('Listening on port '+port);
});
