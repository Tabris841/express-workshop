'use strict';

const PORT = 3000;

const app = require('./config/app');

app.listen(PORT, () => console.log(`Server start at http://localhost:${PORT}`));