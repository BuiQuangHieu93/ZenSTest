import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const JokeDisplay = () => {
  const [jokes, setJokes] = useState([]);
  const [jokeIndex, setJokeIndex] = useState(0);

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await axios.get(
        "https://zen-s-test.vercel.app/api/v1/jokes/"
      );
      setJokes(response?.data);
      console.log("Fetched Jokes:", response);
    } catch (error) {
      console.error("Error fetching jokes:", error);
    }
  };

  const handleLike = async (jokeId) => {
    const consentCookie = Cookies.get("userCookie");
    setJokeIndex(jokeIndex + 1);
    if (consentCookie) {
      try {
        await axios.post("https://zen-s-test.vercel.app/api/v1/vote/", {
          joke: jokeId,
          type: "like",
          cookie: consentCookie,
        });
      } catch (error) {
        console.error("Error voting for joke:", error);
      }
    }
  };

  const handleDislike = async (jokeId) => {
    const consentCookie = Cookies.get("userCookie");
    setJokeIndex(jokeIndex + 1);
    if (consentCookie) {
      try {
        await axios.post("https://zen-s-test.vercel.app/api/v1/vote/", {
          joke: jokeId,
          type: "dislike",
          cookie: consentCookie,
        });
      } catch (error) {
        console.error("Error voting for joke:", error);
      }
    }
  };

  return (
    <div className="flex pl-[360px] pr-[360px] pt-[86px] pb-[120px] bg-white text-black flex-col">
      <div className="text-xl">
        {jokes && jokeIndex < jokes.length
          ? jokes[jokeIndex]?.content
          : "That's all the jokes for today! Come back another day!"}
      </div>

      <div className="w-full flex justify-center pt-[50px] pb-[50px]">
        <div className="h-[1px] w-[80%]  bg-[#d5d5d5]"></div>
      </div>

      <div className="w-full justify-center flex">
        {jokes && jokeIndex < jokes.length ? (
          <div className="flex flex-row justify-between w-[60%]">
            <button
              className="bg-[#2c7edb] w-[320px] h-[60px] text-white"
              onClick={() => handleLike(jokes[jokeIndex]?._id)}
            >
              This is Funny!
            </button>
            <button
              className="bg-[#29b363] w-[320px] h-[60px] text-white"
              onClick={() => handleDislike(jokes[jokeIndex]?._id)}
            >
              This is not funny.
            </button>
          </div>
        ) : (
          <div className="flex flex-row justify-between w-[60%]">
            <button className="bg-[#2c7edb] w-[320px] h-[60px] text-white">
              This is Funny!
            </button>
            <button className="bg-[#29b363] w-[320px] h-[60px] text-white">
              This is not funny.
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JokeDisplay;
