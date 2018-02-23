import React from 'react';
import Message from './Message';

const Messages = ({ messages, handleClick }) => {
  return (
    <div>
      {messages.map(message => <Message key={message.id} message={message} handleClick={handleClick}/>)}
    </div>
  );
};

export default Messages;
