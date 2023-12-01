const path = require('path');

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'images', '2.jpg'));
    // res.send('<ul><li>Hello Surajit!</li></ul>')
}

function postMessage(req, res) {
    console.log('Updating Messages...');
}

module.exports = {
    getMessages,
    postMessage
};