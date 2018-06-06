let messages = [];
let id = 0;

const createMessage = (req, res) => {
  let { text, time } = req.body;
  messages.push({ id, text, time });
  id++;
  res.status(200).send(messages);
};

const readMessage = (req, res) => {
  res.status(200).send(messages);
};

const updateMessage = (req, res) => {
  const { text } = req.body;
  const updateID = req.params.id;
  const messageIndex = messages.findIndex(message => message.id == updateID);
  let message = messages[messageIndex];

  messages[messageIndex] = {
    id: message.id,
    text: text || message.text,
    time: message.time
  };

  res.status(200).send(messages);
};

const deleteMessge = (req, res) => {
  const deleteID = req.params.id;
  messageIndex = messages.findIndex(message => message.id === deleteID);
  messages.splice(messageIndex, 1);
  res.status(200).send(messages);
};

module.exports = {
  createMessage,
  readMessage,
  updateMessage,
  deleteMessge
};
