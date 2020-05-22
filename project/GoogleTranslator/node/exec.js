	const translate = require('@vitalets/google-translate-api');
	const jayson = require('jayson');
	const fs = require('fs');
	const startEnviron = require('startEnviron');
	//创建服务端
	const server = jayson.server({

  		googletranslator: function (args, callback) {
  			translate(args.data, args.option).then(res => {
   			callback(null, res.text);
  			}).catch(err => {
            callback(err);
        });
		},
		serverclose: function (args, callback) {
			listener.close();
			callback(null, "close");
		}
	});

	//启动服务端
	var listener = server.http().listen(startEnviron.port);