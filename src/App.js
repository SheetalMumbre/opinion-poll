import React from "react";
import PollWidget from "./components/PollWidget";
import pollData from "./data/pollData.json";
import "./App.css";
import Poll from "./pages/poll";

function App() {
  //const pollIds = [1,3];

  return (
    <div className="opinion-poll">
      <h1>Poll Widgets</h1>
        {
          pollData.map((poll) => (
            <PollWidget key={poll.pollId} {...poll}/>
          ))
        }
      
      {/* Commented top and below Code for Testing widget on page (poll page) */}
      {/* {pollIds.map((pollId) => (
        <Poll key={pollId} pollId={pollId} />
      ))} */}

    </div>
  );
}

export default App;
