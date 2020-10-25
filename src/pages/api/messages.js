let usersAndMessages = [];

export default function messages(req, res) {
  const { username, text } = req.body;

  if (req.method === 'POST') {
    usersAndMessages.push(req.body);

    res.status(201)
       .json({ username: username, message: text });
  } else {
    res.json({ messages: usersAndMessages });
  }
}
