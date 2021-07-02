import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props);

        this.state = { email: '', password: ''};
    }

    onSubmit(event) {
        event.preventDefault(); //we don't want it to submit itself by default
        
        const { email, password } = this.state; //destructure required if state had more properties than just email and password

        this.props.onSubmit({ email, password }); //this onSubmit function is passed as a prop from Login component
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.onSubmit.bind(this)}className="col s4">
                    <div className="input-field">
                        <input 
                            placeholder="Email"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <input 
                            placeholder="Password"
                            type="password"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>
        );
    }
}

export default AuthForm;