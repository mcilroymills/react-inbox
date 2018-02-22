import React from 'react';
import Message from './Message';

const Messages = ({ messages }) => {
  return (
    <li>
      {messages.map(message => <Message message={message}/>)}
    </li>
  );
};

export default Messages;
