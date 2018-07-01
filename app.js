let express = require('express');
let bodyParser = require('body-parser');
let cfenv = require('cfenv');

// create express instance
let oApp = express();

// Cloud Foundry environment variables
let oAppEnv = cfenv.getAppEnv();


// body parser middleware to handle URL parameter and JSON bodies
oApp.use(bodyParser.urlencoded({extended: false}));
oApp.use(bodyParser.json());

// // "static" resources 
// oApp.use(express.static(__dirname + '/client/public/webapp'));  

// connect to mongodb
require('./server/db/mongo-connect.js')(oAppEnv);

// // client express routes
// require('./client/routes/routes.js')(oApp);

// api
//require('./server/api/info/info.js')(oApp, oAppEnv);
require('./server/api/usecase.js')(oApp);
require('./server/api/ceename.js')(oApp);
require('./server/api/industry.js')(oApp);
require('./server/api/link.js')(oApp);
require('./server/api/region.js')(oApp);
require('./server/api/lineOfBusiness.js')(oApp);
require('./server/api/sourceOfUsecase.js')(oApp);
require('./server/api/technicalScenario.js')(oApp);
require('./server/api/usecaseType.js')(oApp);

// express app listener
oApp.listen(oAppEnv.port, function(){
    console.log('Server listening at ' + oAppEnv.url);
});