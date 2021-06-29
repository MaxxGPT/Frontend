import React, {useState} from 'react'
import { request } from './services/Request';

export const ChangePassword = () => {

    const [passwordData,setPasswordData] = useState({});

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
            const data = JSON.stringify( passwordData );
            const result = request("/api/users", {
              method: 'PATCH',
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