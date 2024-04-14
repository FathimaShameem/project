import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        username: '',
        password: ''
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        try {
            const response = await axios.post('/api/users/login', { username, password });
            console.log(response.data);
            // Handle successful login
        } catch (error) {
            console.error('Login failed:', error.response.data);
            // Handle login error
        }
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:</label>
                    <input type="text" name="username" onChange={this.handleChange} /><br />
                    <label>Password:</label>
                    <input type="password" name="password" onChange={this.handleChange} /><br />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default App;
