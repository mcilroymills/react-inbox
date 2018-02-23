import React from 'react';

const Toolbar = ({ bulkSelect, markAsRead, markAsUnread, deleteMessages, unreadCount, addLabel, removeLabel, selectAllButtonClass }) => {

  return <div className="row toolbar">
    <div className="col-md-12">
      <p className="pull-right">
        <span className="badge badge">{unreadCount}</span>
        unread message{unreadCount === 1 ? '' : 's'}
      </p>

      <button onClick={bulkSelect} className="btn btn-default">
        <i className={selectAllButtonClass}></i>
      </button>

      <button onClick={markAsRead} className="btn btn-default">
        Mark As Read
      </button>

      <button onClick={markAsUnread} className="btn btn-default">
        Mark As Unread
      </button>

      <select onChange={(e) => addLabel(e.target.value)} className="form-control label-select">
        <option>Apply label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <select onChange={(e) => removeLabel(e.target.value)} className="form-control label-select">
        <option>Remove label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <button onClick={deleteMessages} className="btn btn-default">
        <i className="fa fa-trash-o"></i>
      </button>
    </div>
  </div>;
};

export default Toolbar;

