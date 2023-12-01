const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.post('/', friendsController.postNewFriend)
friendsRouter.get('/', friendsController.getAllFriends)
friendsRouter.get('/:friendId', friendsController.getFriendById)

module.exports = friendsRouter;