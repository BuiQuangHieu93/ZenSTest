import Vote from "../mongodb/models/vote.model.js";

export async function VoteJoke(req, res) {
  try {
    const { type, joke, cookie } = req.body;

    console.log(`Received ${type} vote for joke: ${joke}`);

    const newVote = new Vote({
      joke,
      type,
      userCookie: cookie,
    });

    const createdVote = await newVote.save();
    res.status(200).send({ message: "Bike updated", createdVote });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
}
