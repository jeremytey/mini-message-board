// app.js

const express = require('express');
const app = express();
const messageRouter = require('./routes/messageRouter');

// Set up view engine and middleware
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use('/', messageRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});