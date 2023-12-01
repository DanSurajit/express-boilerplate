const express = require('express');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const homeController = require('./controllers/home.controller');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`Method: ${req.method}, Request URL: ${req.baseUrl}${req.url}, ms: ${delta}`);
})

app.use('/site', express.static('public'));
app.use(express.json());

app.get('/', homeController.getHome)

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Server is live on http://localhost:${PORT}...`);
})