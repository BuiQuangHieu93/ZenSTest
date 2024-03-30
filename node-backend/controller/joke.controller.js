import Joke from "../mongodb/models/joke.model.js";

const FetchJoke = async (req, res) => {
  try {
    const jokes = await Joke.find();
    console.log(jokes);
    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createJoke = async (req, res) => {
  try {
    const { content } = req.body;
    const newJoke = new Joke({
      content: content,
    });

    const createJoke = await newJoke.save();
    res.status(200).json(createJoke);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { FetchJoke, createJoke };
