import React from "react";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeName: "John Doe",
            bManager: false,
            count: 0,
        };
    }
    handleTextInput(e) {
        this.setState({ employeeName: e.target.value });
    }
    handleCheckBoxInput() {
        this.setState((prevState) => ({
            bManager: !prevState.bManager,
        }));
    }
    IncrementCount() {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    }
    DecrementCount() {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }));
    }
    render() {
        let role = this.state.bManager ? "Manager" : "Employee";
        let Count = this.state.count;
        return (
            <>
              <h1>state demo</h1>  
              <div>
                <label>
                    Employee Name:
                    <input type="text" onInput={(e)=> this.handleTextInput(e)} defaultValue={this.state.employeeName} />
                </label>
                <label>
                    <input type="checkbox" onChange={()=> this.handleCheckBoxInput()} defaultChecked={this.state.bManager} />
                    Manager
                </label>
                <br />
                <label>
                    Count : {Count}
                </label>
                <br />
                <button onClick={()=>this.IncrementCount()}>IncrementCount</button>
                
                <button onClick={()=>this.DecrementCount()}>DecrementCount</button>
                
              </div>
              <p>{this.state.employeeName} is a {role}</p>

              
            </>
        );
    }
}