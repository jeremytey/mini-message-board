const messages = [
    { id: Date.now().toString(), messageUser: "Jackson",text: "Hello?", time: "10:00 AM" },
    { id: (Date.now() + 1).toString(), messageUser: "You", text: "Hi, Jackson! How are you?", time: "10:01 AM" },
];

module.exports = messages;