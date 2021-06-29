import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { request } from '../services/Request';

export const UpdateSource = () => {

    const { id } = useParams();
    const [sourceData, setSourceData] = useState({});

    useEffect(()=>{
      request('/api/sources/'+id,{}).then((result)=>{
        setSourceData(result.data);
      });
    }, );
    
    const onChangeHandlerFn = (event) => {
          // update the state;
          let currentData = sourceData;
          currentData[event.target.name] = event.target.value;
          setSourceData( currentData );
    }

    const handleSubmit = (event) => {
          event.preventDefault();           
          const data = JSON.stringify( sourceData );
          const result = request("/api/sources/"+id, {
            method: 'PUT',
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
            <h1> Update Source</h1>
            <div>
                <p>Name</p>
                <input type="text" id="name" name="name" onChange={onChangeHandlerFn} defaultValue={sourceData.name} required/>
            </div>
            <div>
                <p>Description</p>
                <textarea id="description" name="description" onChange={onChangeHandlerFn} defaultValue={sourceData.description} required></textarea>
            </div>
            <div>
                <p>URL</p>
                <input type="text" id="url" name="url" onChange={onChangeHandlerFn} defaultValue={sourceData.url} required/>
            </div>
            <div>
                <p>language</p>
                <input type="text" id="language" name="language" onChange={onChangeHandlerFn} defaultValue={sourceData.language} required/>
            </div>
            <div>
                <p>Country</p>
                <input type="text" id="country" name="country" onChange={onChangeHandlerFn} defaultValue={sourceData.country} required/>
            </div>
            <div>
                <p>State</p>
                <input type="text" id="state" name="state" onChange={onChangeHandlerFn} defaultValue={sourceData.state} required/>
            </div>
            <div>
                <p>City</p>
                <input type="text" id="city" name="city" onChange={onChangeHandlerFn} defaultValue={sourceData.city} required/>
            </div>

            <button type="submit"> Update</button>
            <li><Link to="/privacy">Privacy & Terms</Link></li> 
        </form>
    );

};