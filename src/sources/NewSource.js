import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { request } from '../services/Request';

export const NewSource = () => {

    const [sourceData, setSourceData] = useState({});
    
    const onChangeHandlerFn = (event) => {
          // update the state;
          let currentData = sourceData;
          currentData[event.target.name] = event.target.value;
          setSourceData( currentData );
    }

    const handleSubmit = (event) => {
          event.preventDefault();           
          const data = JSON.stringify( sourceData );
          const result = request("/api/sources", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
          });
          result.then( (result) =>{
              console.log(result);
              if(result.error){
                  alert('There was an error while processing your data. Please try again');
              }else{
                  window.location.href="/sources"
              }
          });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1> New Source</h1>
            <div>
                <p>ID</p>
                <input type="text" id="_id" name="_id" onChange={onChangeHandlerFn} required/>
            </div>
            <div>
                <p>Name</p>
                <input type="text" id="name" name="name" onChange={onChangeHandlerFn} required/>
            </div>
            <div>
                <p>Description</p>
                <textarea id="description" name="description" onChange={onChangeHandlerFn} required></textarea>
            </div>
            <div>
                <p>URL</p>
                <input type="text" id="url" name="url" onChange={onChangeHandlerFn} required/>
            </div>
            <div>
                <p>language</p>
                <input type="text" id="language" name="language" onChange={onChangeHandlerFn} required/>
            </div>
            <div>
                <p>Country</p>
                <input type="text" id="country" name="country" onChange={onChangeHandlerFn} required/>
            </div>
            <div>
                <p>State</p>
                <input type="text" id="state" name="state" onChange={onChangeHandlerFn} required/>
            </div>
            <div>
                <p>City</p>
                <input type="text" id="city" name="city" onChange={onChangeHandlerFn} required/>
            </div>

            <button type="submit"> Register</button>
            <li><Link to="/privacy">Privacy & Terms</Link></li> 
        </form>
    );

};