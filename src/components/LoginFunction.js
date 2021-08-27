import React, {useState} from 'react';
import LoginForm from './LoginForm';
import './LoginForm.css';
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginFunction() {
    const adminUser = {
        email: "daddyshark@doodoo.com",
        password: "babyshark"
      }
    
      const [user, setUser] = useState({email:""});
      const [error, setError] = useState("");
    
      const Login = details => {
          console.log(details);
        
          if (details.email === adminUser.email && details.password === adminUser.password)
          {
            console.log("Logged in");
            
            setUser({
              email: details.email
            });
          }
          else
          {
            console.log("Details do not match. Try again.")
            setError("Details do not match. Try again.");
          }
      }
    
      const Logout = () => {
          console.log("Logout");
    
          setUser({email: ""})
      }

      let history = useHistory();
    
      return (
        <div className="App">
          {(user.email !== "") ? (
              <div className="welcome">
                <h2>Welcome, <span>{user.email}</span></h2>
                <button className="btn btn-primary" onClick={() => {history.push('/StudentRegistration');}}>Proceed to Enrollment</button>
                &nbsp;
                <button className="btn btn-warning" onClick={Logout}>Logout</button>
              </div>
          ):
          <LoginForm Login={Login} error={error}/>
          }
        </div>
      );
}

export default LoginFunction
