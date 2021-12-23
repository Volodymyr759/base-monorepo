const express = require('express');
const config = require('config');
const PORT = config.get('port') || 2901;

const app = express();

app.use('/todo', require('./routes/todos-route'))

app.listen(PORT, () => console.log(`Server works on ${PORT}`));