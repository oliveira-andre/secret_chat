const io = require('socket.io')(server);
let messages = [];

io.on('connection', socket => {
  socket.emit('previousMessages', messages);
  socket.on('sendMessage', data => {
    messages.push(data);
    socket.broadcast.emit('receivedMessage', data);
  });
});

export default messages(req, res) => {
  if (req.method === 'POST') {
    res.statusCode = 201;
    res.json({ username: 'John Doe', message: 'safe' });
  } else {
    res.statusCode = 200;
    res.json({ messages: messages });
  }
}
