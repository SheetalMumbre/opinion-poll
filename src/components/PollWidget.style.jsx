import styled from "styled-components";

export const PollWidgetContainer = styled.div`
  padding: 20px;
  background: #f4f4f9;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const PollQuestion = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
`;

export const PollOptions = styled.div`
  margin: 5px 0;
  display: flex;
  flex-direction: column;
`;

export const PollOptionButton = styled.button`
  margin: 5px 0;
  padding: 10px;
  width: 100%;
  background-color:  ${({ selected }) => (selected ? '#ffffff' : '#F9A524')};
  color: ${({ selected }) => (selected ? '#F9A524' : '#ffffff')};
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const PollOptionResult = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const PollOptionAnswer = styled.div`
  color: ${({ selected }) => (selected ? '#F9A524' : '#696464')};
  flex-grow: 1;
  text-align: left;
`;

export const ResultBar = styled.div`
  background-color:  ${({ selected }) => (selected ? '#F9A524' : '#696464')};
  height: 5px;
  margin: 10px 0;
  transition: width 0.3s ease;
  border-radius: 5px;
  width:0;
  animation: grow 0.5s forwards; // Animation for growing the bar

  // Keyframes for the growing animation
  @keyframes grow {
    from {
      width: 0; // Start width
    }
    to {
      width: ${({ width }) => width}; // End width
    }
  }
`;

export const PercentageText = styled.span`
  margin-left: 10px; 
  display: block;
  float: right;
`;