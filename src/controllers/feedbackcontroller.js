
const Message = require('../modals/Feedback');

// post data
exports.createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
// get all data
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find(); 
    res.status(200).json(messages); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};