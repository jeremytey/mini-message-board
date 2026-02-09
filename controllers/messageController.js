// controllers/messageController.js

const messages = require('../data/messages');

exports.getAllMessages = (req, res) => {
    res.render('index', {title: 'Mini Message Board', messages: messages});
};

exports.getNewMessageForm = (req, res) => {
  res.render('form');
};

exports.createMessage = (req, res) => {
  const messageUser = req.body.messageUser; //grabbing user and text from form
  const messageText = req.body.messageText;
  const ID = Date.now().toString();
    const newMessage = { id: ID, user: messageUser, text: messageText, added: new Date() };
    messages.push(newMessage);
    res.redirect('/');
};

exports.getMessageById = (req, res) => {
  const id = req.params.id;
    const message = messages.find(msg => msg.id === id);
    if (!message) {
        res.status(404).send('Message not found');
    } else {
        res.render('messageDetail', {message: message});
    }
};