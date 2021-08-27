import React, {useState} from 'react'
import './LoginForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="innerForm">
                    <h2>Login</h2>
                    {(error !== "") ? ( <div className="error">{error}</div>): ""}
                    <div className="groupForm">
                        <label for="email">Email Address:</label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                    </div>
                    <div className="groupForm">
                        <label for="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Login"/>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
