const model = require('../models/friends.model');

const { createNewFriend } = require('../services/friend.service');

function postNewFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        })
    }
    const newFriend = createNewFriend(req.body.name);

    res.json(newFriend);
}

function getAllFriends(req, res) {
    res.json(model);
}

function getFriendById(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = model[friendId];
    if (friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({
            error: 'Friend does not exist'
        });
    }
}

module.exports = {
    postNewFriend,
    getAllFriends,
    getFriendById
}