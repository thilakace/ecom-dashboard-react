import React, {  useState } from "react";
import '../css/Common.css';
import { useNavigate   } from "react-router-dom";



const Login = () => {
	let navigate = useNavigate();
	const [respMessage, setRespMessage] = useState(''); 
	const [inputField , setInputField] = useState({
        email: '',
        password: ''
    })

	const inputsHandler = (e) =>{
        setInputField( {...inputField,[e.target.name]: e.target.value} )
    }
	const submitLogin = () => {
		console.log(inputField);
		// POST request using fetch inside useEffect React hook
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(inputField)
		};
		fetch('http://localhost:3005/api/doLogin', requestOptions)
			.then(response => response.json())
			.then(data => {
				if(data.status === 'success'){
					localStorage.setItem('token', data.token);
                    navigate("/admin/dashboard");
					console.log(localStorage.getItem('token'));
				}else{
                    setRespMessage(data.message);
					
				}
				
			});
	}

      return (
        <main>
		<div id="login-form-wrap">
		<h2>Login</h2>
		<form id="login-form" >
		  <p>
		  <input type="text" id="email" name="email" placeholder="Email / Username"   value={inputField.email} onChange={inputsHandler} /><i className="validation"><span></span><span></span></i>
		  </p>
		  <p>
		  <input type="password" id="password" name="password" placeholder="Password"  value={inputField.password} onChange={inputsHandler} /><i className="validation"><span></span><span></span></i>
		  </p>
		  <p>
		  <input type="button" id="login" value="Login" onClick={submitLogin} />
		  </p>
		  <p>
		      <span className="loginRespMesgSuccess">{respMessage}</span>
		  </p>
		</form>
		<div id="create-account-wrap">
		  <p>Not a member? <a href="/register">Create Account</a></p>
		</div>
	  </div>
	  </main>
      )
}

export default Login;