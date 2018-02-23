import React from 'react';
import Message from './Message';

const Messages = ({ messages, handleClick }) => {
  return (
    <li>
      {messages.map(message => <Message key={message.id} message={message} handleClick={handleClick}/>)}
    </li>
  );
};

export default Messages;
