const model = require('../models/friends.model');

function createNewFriend(friendName) {
    const newFriend = {
        name: req.body.name,
        id: model.length
    };
    model.push(newFriend);
    return newFriend;
}

module.exports = {
    createNewFriend
}