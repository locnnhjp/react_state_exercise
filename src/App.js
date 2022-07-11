import React from "react";
import "./App.css";
import Item from "./Components/Item";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            item: "",
        };
    }

    handleChange = (e) => {
        this.setState({
            item: e.target.value,
        });
    };

    handleAddItem = (e) => {
        e.preventDefault();
        if (this.state.item !== "") {
          this.setState({
            todoList: [...this.state.todoList, this.state.item],
            item: ""
          });
        }
    };

    render() {
        const {todoList} = this.state;
        return (
            <div className="App">
                <h1>Todo List</h1>
                <input type="text" onChange={this.handleChange} value={this.state.item} placeholder="Enter a new todo"/>
                <button onClick={this.handleAddItem}>Add</button>
                <ul>
                    {todoList.map(item => 
                        <Item itemName={item} />
                    )}
                </ul>
            </div>
        );
    }
}

export default App;
