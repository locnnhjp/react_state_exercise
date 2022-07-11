import React from "react";

class Item extends React.Component {
    render() {
        return (
            <li className="item">
                <label>
                    <input type="checkbox" value/>
                    <span className="todo-text">{this.props.itemName}</span>
                </label>
            </li>
        )
    }
}

export default Item;