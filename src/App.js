import React from "react";
import "./App.css";

const students = [
    { name: "nguyen1", phone: "08094559292", email: "aaa@sample.com" },
    { name: "nguyen2", phone: "08094559292", email: "aaa@sample.com" },
    { name: "nguyen3", phone: "08094559292", email: "aaa@sample.com" },
    { name: "nguyen4", phone: "08094559292", email: "aaa@sample.com" },
];
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: "",
            phoneInput: "",
            emailInput: "",
            studentList: students,
            isValid: false,
            indexSelected: -1,
        };
    }

    handleChangeName = (e) => {
        this.setState(
            {
                nameInput: e.target.value,
            },
            () => this.checkInvalidForm()
        );
    };

    handleChangePhone = (e) => {
        this.setState(
            {
                phoneInput: e.target.value,
            },
            () => this.checkInvalidForm()
        );
    };

    handleChangeEmail = (e) => {
        this.setState(
            {
                emailInput: e.target.value,
            },
            () => this.checkInvalidForm()
        );
    };

    checkInvalidForm = () => {
        const value =
            this.state.nameInput &&
            this.state.phoneInput &&
            this.state.emailInput;
        this.setState({
            isValid: value,
        });
    };

    handleSelect = (selectedStudent, index) => {
        console.log("handle slected is invoked!");
        this.setState({
            nameInput: selectedStudent.name,
            phoneInput: selectedStudent.phone,
            emailInput: selectedStudent.email,
            indexSelected: index,
        });
    };

    handleDelete = (index) => {
        this.setState((prevState) => {
            let newList = prevState.studentList.slice();
            newList.splice(index, 1);
            return {
                studentList: newList,
            };
        });
    };

    handleSubmit = () => {
        if (this.state.isValid) {
            const indexSelected = this.state.indexSelected;
            const newList = this.state.studentList.slice();
            if (indexSelected > -1) {
                newList.splice(indexSelected, 1, {
                    name: this.state.nameInput,
                    phone: this.state.phoneInput,
                    email: this.state.emailInput,
                });
            } else {
                newList.push({
                    name: this.state.nameInput,
                    phone: this.state.phoneInput,
                    email: this.state.emailInput,
                });
            }
            this.setState({
                studentList: newList,
                indexSelected: -1,
                nameInput: "",
                emailInput: "",
                phoneInput: "",
                isValid: false,
            });
        }
    };
    render() {
        return (
            <div className="App">
                <h1>Student List</h1>
                Name :
                <input
                    type="text"
                    value={this.state.nameInput}
                    onChange={this.handleChangeName}
                />
                <br />
                Phone:
                <input
                    type="number"
                    value={this.state.phoneInput}
                    onChange={this.handleChangePhone}
                />
                <br />
                Email:
                <input
                    type="email"
                    value={this.state.emailInput}
                    onChange={this.handleChangeEmail}
                />
                <br />
                <button onClick={this.handleSubmit}>Submit</button>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.studentList.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            this.handleSelect(item, index);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => {
                                            this.handleDelete(index);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default App;
