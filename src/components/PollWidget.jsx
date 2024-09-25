import React, {useState, useEffect} from 'react'
import { PollWidgetContainer ,PollQuestion, PollOptionButton, PollOptions, PollOptionResult, PollOptionAnswer, ResultBar, PercentageText} from './PollWidget.style';

//Track rendered poll to check duplicate poll
const pollRendered = {};

const PollWidget = ({pollId, question, answers}) => {
    const[vote, setVote] = useState([]);
    const[displayPoll, setDisplayPoll] = useState(true);
    const[hasVoted, setHasVoted] = useState(false);
    const[selectedOption, setSelectedOption] = useState();

    //Check if poll is already rendered
    useEffect(() => {
      if(pollRendered[pollId]){
        setDisplayPoll(false);
      }
      else{
        pollRendered[pollId] = true; //Poll rendered true 
      }
    
      return () => {
        delete pollRendered[pollId]; //cleanup after component unmounted
      }
    }, [pollId])
    
    //load vote from localStorage
    useEffect(() => {
      if(displayPoll){
        const savedVote = localStorage.getItem(`poll-${pollId}`)

        if(savedVote){
            setVote(JSON.parse(savedVote));
        }
        else{
            setVote(Array(answers.length).fill(0));
        }
      }
    }, [pollId, answers.length,displayPoll]);
    
    //save vote to localStorage
    useEffect(() => {
      if(vote.length && displayPoll){
        localStorage.setItem(`poll-${pollId}`, JSON.stringify(vote));
      }
    }, [vote,pollId,displayPoll]);
    
    //handle vote
    const handleVote = (index) => {
        const newVote = [...vote];
        newVote[index] += 1;
        setVote(newVote);
        setHasVoted(true);
        setSelectedOption(index);
    }

    if(!displayPoll){
        return null;  //poll duplication avoid
    }

    const totalVotes = vote.reduce((sum, vote) => sum + vote, 0); //calculate total votes
    
    return (
        <PollWidgetContainer>
            <PollQuestion>{question}</PollQuestion>
            { !hasVoted ? (
                <PollOptions>
                    {answers.map((answer,index) => (
                        <PollOptionButton key={index} onClick={() => handleVote(index)}
                        selected = {selectedOption === index}>
                            {answer}
                        </PollOptionButton>
                    ))}
                </PollOptions>
            ) : (
                <PollOptions>
                    {answers.map((answer,index) => (
                        <PollOptionResult key={index}>
                            <PollOptionAnswer selected={selectedOption===index}>{answer}
                            <PercentageText>

                                 ({totalVotes ? ((vote[index] / totalVotes) * 100).toFixed(1) : 0}%)
                              </PercentageText>
                            <ResultBar selected = {selectedOption === index} style={{ width: `${(vote[index] / totalVotes) * 100}%` }}></ResultBar>
                            </PollOptionAnswer>
                        </PollOptionResult>
                    ))}
                </PollOptions>
            )
            }
        </PollWidgetContainer>
    )
};

export default PollWidget;