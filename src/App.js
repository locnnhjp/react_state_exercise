import React from "react";
import "./App.css";
import Intro from "./Components/Intro";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false,
        };
    }

    toggle = () => {
        this.setState({
            isExpand: !this.state.isExpand,
        });
    };
    
    render() {
        return (
            <div>
                <h1>Conditional Rendering</h1>
                {this.state.isExpand ? (
                    <div>
                        <button onClick={this.toggle}>Đóng giới thiệu</button>
                        <Intro />
                    </div>
                ) : (
                    <button onClick={this.toggle}>Xem giới thiệu</button>
                )}
            </div>
        );
    }
}
export default App;
