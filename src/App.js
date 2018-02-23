import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Messages from './components/Messages';
import importedMessages from './data/seed';

class App extends Component {

  state = {
    bulkSelect: false,
    messages: importedMessages,
    unreadCount: 0
  };

  getUnreadCount = () => this.state.messages.filter(message => message.read !== true).length;

  bulkSelect = () => {
    const newMessages = this.state.messages.map(message => ({...message, selected: !this.state.bulkSelect}));

    this.setState({
      messages: newMessages,
      bulkSelect: !this.state.bulkSelect
    });
  };

  markAsRead = () => {
    this.setState({
      messages: this.state.messages.map(message => {
        if (message.selected === true) {
          return Object.assign({}, message, { read: true })
        } else {
          return message;
        }
      })
    });
  };

  markAsUnread = () => {
    this.setState({
      messages: this.state.messages.map(message => {
        if (message.selected === true) {
          return Object.assign({}, message, { read: false })
        } else {
          return message;
        }
      })
    });
  };

  deleteMessages = () => {
    this.setState({
      messages: this.state.messages.filter(message => message.selected !== true)
    });
  };

  handleClick = (message) => {
    const newMessages = this.state.messages.map(m => {
      if (m.id === message.id) {
        m = message;
      }
      return m;
    });

    this.setState({ messages: newMessages });
  };

  addLabel = (label) => {
    console.log(label);
    this.setState({
      messages: this.state.messages.map(message => {
        if (message.selected === true && !message.labels.includes(label) && label !== "Apply label") {
          return { ...message, labels: [...message.labels, label] }
        } else {
          return message;
        }
      })
    });
  };

  removeLabel = (label) => {

    this.setState({
      messages: this.state.messages.map(message => {
        if (message.selected === true && message.labels.includes(label) && label !== "Remove label") {
          const indexToRemove = message.labels.indexOf(label);
          message.labels.splice(indexToRemove, 1);
        }
        return message;
      })
    });
  };

  getSelectAllButtonClass = () => {
    const selectedCount = this.state.messages.filter(message => message.selected === true).length;

    if (selectedCount === this.state.messages.length) {
      return 'fa fa-check-square-o';
    } else if (selectedCount === 0) {
      return 'fa fa-square-o';
    } else {
      return 'fa fa-minus-square-o';
    }
  };

  render() {
    return (
      <div className="App">
        <Toolbar
          selectAllButtonClass={this.getSelectAllButtonClass()}
          removeLabel={this.removeLabel}
          addLabel={this.addLabel}
          unreadCount={this.getUnreadCount()}
          deleteMessages={this.deleteMessages}
          markAsRead={this.markAsRead}
          markAsUnread={this.markAsUnread}
          bulkSelect={this.bulkSelect}
        />
        <Messages messages={this.state.messages} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
