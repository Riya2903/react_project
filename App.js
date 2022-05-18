import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "", name: "" };
        this.updateName = this.updateName.bind(this);
        this.callAPI = this.callAPI.bind(this);
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI?name="+ this.state.name)
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));

    }

    componentWillMount() {
   //     this.callAPI();
    }
    updateName(event) {
        console.log(event.target.value);
        this.setState({name:event.target.value})
    }


 /*callhost()
   {
     fetch('mongodb://localhost:27017/users', {
        method: 'POST',
        body: JSON.stringify(this.state.name),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data));
}*/


    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <h1>Enter your Username </h1>
                    <form>
                        <label>
                            <p>
                                Username
                            </p>
                            <input name="name" onChange={this.updateName} />
                        </label>
                        <button type="button" onClick={this.callAPI}>Submit</button>
                    </form>
                    <h1>{this.state.name}</h1>
                </header>

            </div>
        );

    }

}
export default App;
