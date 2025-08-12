const aiservice = require('../service/ai.service');




module.exports.getresponse =async (req, res) => {
  const prompt = req.query.prompt;

  if (!prompt) {
    return res.status(400).send('Prompt is required');
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    res.send(response.text);
  } catch (error) {
    console.error('Error generating AI response:', error);
    res.status(500).send('Internal Server Error');
  }
}