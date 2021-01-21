import React from 'react';
import Timer from './components/Timer';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import ClearButton from './components/ClearButton';
import EmptyState from './components/EmptyState';

import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.clearCompletedItems = this.clearCompletedItems.bind(this);
    this.startSession = this.startSession.bind(this);
    this.increaseSessionsCompleted = this.increaseSessionsCompleted.bind(this);
    this.toggleItemIsCompleted = this.toggleItemIsCompleted.bind(this);

    this.state = {
      // TODO 1
      items: [],
      nextItemId: 0,
      sessionIsRunning: false,
      itemIdRunning: null
    };
  }

  addItem(description) {
    const { nextItemId } = this.state;
    const newItem = {
      // TODO 2: initialize new item object
      id: nextItemId,
      description,
      sessionsCompleted: 0,
      isCompleted: false,
      areItemsMarkedAsCompleted: false
    };
    this.setState((prevState => ({
      // TODO 2: append new items to list and increase nextItemId by 1
      items: [...prevState.items, newItem],
      nextItemId: prevState.nextItemId + 1
    })));
  }

  clearCompletedItems() {
    // TODO 6
    let newItems = this.state.items.filter((item) => {
      return !item.isCompleted;
    });
    this.setState({items: newItems});
  }

  increaseSessionsCompleted(itemId) {
    // TODO 5
    let newItems = [...this.state.items];
    for (let index in newItems) {
      if (newItems[index].id === itemId) {
        newItems[index].sessionsCompleted += 1;
        break;
      }
    }
    this.setState({newItems});
  }

  toggleItemIsCompleted(itemId) {
    // TODO 6
    let newItems = [...this.state.items];
    // let isCompleted;
    for (let index in newItems) {
      if (newItems[index].id === itemId) {
        newItems[index].isCompleted = newItems[index].isCompleted ? false : true;
        // isCompleted = newItems[index].isCompleted;
        break;
      }
    }
    this.setState({newItems, areItemsMarkedAsCompleted: true});
  }

  startSession(id) {
    // TODO 4
    this.setState({
      sessionIsRunning: true,
      itemIdRunning: id
    });
  }

  render() {
    const {
      items,
      sessionIsRunning,
      itemIdRunning,
      areItemsMarkedAsCompleted,
    } = this.state;
    return (
      <div className="flex-wrapper">
        <div className="container">
          <header>
            <h1 className="heading">Today</h1>
            {areItemsMarkedAsCompleted && <ClearButton onClick={this.clearCompletedItems} />}
          </header>
          {/* TODO 4 */}
          {this.state.items.length === 0 ? <EmptyState /> : null}
          {sessionIsRunning && <Timer
            mode="WORK"
            onSessionComplete={() => { alert("complete") }}
            autoPlays 
            onSessionComplete={() => {this.increaseSessionsCompleted(itemIdRunning)}} 
            key={this.state.itemIdRunning}
          />}
          <div className="items-container">
            {/* TODO 3:  display todo items */}
            {items.map((item) => {return <TodoItem 
            description={item.description} 
            sessionsCompleted={item.sessionsCompleted} 
            isCompleted={item.isCompleted} 
            startSession={() => {this.startSession(item.id)}} 
            toggleIsCompleted={() => {this.toggleItemIsCompleted(item.id)}} 
            key={item.id}
            />})}
          </div>
        </div>
        <footer>
          <TodoInput addItem={this.addItem} />
        </footer>
      </div>
    );
  }
}

export default App;
