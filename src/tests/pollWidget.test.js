import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PollWidget from '../components/PollWidget';

const pollMock = {
    pollId : 5,
    question : 'What is your favourite city?',
    answers: ['Mumbai','Pune','Delhi']
};

test('renders poll questions', () => {
    render(<PollWidget {...pollMock}/>);

    expect(screen.getByText(/What is your favourite city?/i)).toBeInTheDocument();

    pollMock.answers.forEach(answer => {
        expect(screen.getByText(answer)).toBeInTheDocument();
      });
})