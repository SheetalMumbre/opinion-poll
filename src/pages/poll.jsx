import React from "react";
import PollWidget from "../components/PollWidget";
import pollData from "../data/pollData.json";

const Poll = ({pollId}) => {
  const singlePoll = pollData.find((poll) => poll.pollId === pollId);
  return (
    <div>
      {singlePoll ? (
        <PollWidget
          pollId={singlePoll.pollId}
          question={singlePoll.question}
          answers={singlePoll.answers}
        />
      ) : (
        <p>Poll not found!</p>
      )}
    </div>
  );
};

export default Poll;
