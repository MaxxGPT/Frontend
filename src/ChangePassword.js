import React, {useState, useEffect} from 'react'
import { request } from './services/Request';

export const ChangePassword = () => {

    const [passwordData,setPasswordData] = useState({});
    const [userData, setUserData] = useState({});

        useEffect(() => {
            request('http://localhost:4000/dev/users/me', {
                headers:{
                    'Authorization': 'Bearer '+localStorage.token
                }
            })
            .then(
                (result) => {
                    setUserData(result.data);
                }
            );
        }, []);

    const onChangeHandlerFn = (event) => {
          // update the state;
          let currentData = passwordData;
          currentData[event.target.name] = event.target.value;
          setPasswordData( currentData );
    }

    const handleSubmit = (event) => {
          event.preventDefault();
          if(passwordData.password !== passwordData.password2){
            alert("The password does not match.");
          }else{
            let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            if( regex.test(passwordData.password) ){
                const data = JSON.stringify({
                    email: userData.email,
                    password: passwordData.password
                });
                const result = request("http://localhost:4000/dev/users/password", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: data
                });
                result.then( (result) =>{
                    if(result.error){
                        alert('There was an error while processing your data. Please try again');
                    }else{
                        window.location.href="/dashboard";
                    }
                });
            }else{
                alert("The password must be a minimum of 8 characters, containing at least: one uppercarse letter, one lowercase letter and a number");
            }
          }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1> Login</h1>
            <p> Password:</p>
            <input
                type="password"
                name="password"
                onChange={ onChangeHandlerFn }
            />
            <p> Repeat Password:</p>
            <input
                type="password"
                name="password2"
                onChange={ onChangeHandlerFn }
            />
            <button type="submit"> Change password</button>
            <a class="btn btn-danger" href="/dashboard">Return</a>
        </form>
    );
};