import React from 'react';

const Message = ({ message }) => {

  const messageClass = () => {
    let className = 'row message';
    message.read ? className += ' read' : className += ' unread';
    message.selected ? className += ' selected' : '';

    return className;
  };

  return <div className={messageClass()}>
    <div className="col-xs-1">
      <div className="row">
        <div className="col-xs-2">
          <input type="checkbox"/>
        </div>
        <div className="col-xs-2">
          <i className="star fa fa-star-o"></i>
        </div>
      </div>
    </div>
    <div className="col-xs-11">
      <a href="#">
        {message.subject}
      </a>
    </div>
  </div>;
};

export default Message;
