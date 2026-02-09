const { Router } = require('express');
const messageController = require('../controllers/messageController');
const messageRouter = Router();

messageRouter.get('/', messageController.getAllMessages);
messageRouter.get('/new', messageController.getNewMessageForm);
messageRouter.post('/new', messageController.createMessage);
messageRouter.get('/message/:id', messageController.getMessageById);

module.exports = messageRouter;