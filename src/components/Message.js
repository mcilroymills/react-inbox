import React from 'react';

const Message = ({ message, handleClick }) => {

  const messageClass = () => {
    let className = 'row message';
    className += message.read ?  ' read' : ' unread';
    className += message.selected ? ' selected' : '';

    return className;
  };

  const getLabels = () => {
    return message.labels.map((label, i) => {
      return <span key={i} className="label label-warning">{label}</span>;
    })
  };

  const onClick = (property) => {

    message[property] = !message[property];

    handleClick(message);
  };

  return <div className={messageClass()}>
    <div className="col-xs-1">
      <div className="row">
        <div className="col-xs-2">
          <input type="checkbox" checked={message.selected ? 'checked' : ''} onChange={() => onClick("selected")}/>
        </div>
        <div className="col-xs-2">
          <i className={message.starred ? 'star fa fa-star' : 'star fa fa-star-o' } onClick={() => onClick("starred")}></i>
        </div>
      </div>
    </div>
    <div className="col-xs-11">
      {getLabels()}
      <a>
        {message.subject}
      </a>
    </div>
  </div>;
};

export default Message;
