const getName = async (req, res) => {
    try {

  const name = 'teste';
  
      res.json({ name });
    } catch (error) {
      console.error('Error getting name:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = { getName };