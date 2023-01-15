
const mongoose = require('mongoose');
const port = 3000
const app = require('./app');
mongoose.connect('mongodb://localhost/Mario');



app.listen(port, () => console.log(`App listening on port ${port}!`));