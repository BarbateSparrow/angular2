let express = require('express'),
    wagner = require('wagner-core');

require('./models')(wagner);

let app = express();

app.use('/api/v1', require('./api')(wagner));
app.listen(3000);
