import React, { useState, useEffect } from 'react'
//import { Link } from 'react-router-dom';
import { request } from '../services/Request';
import { Table } from 'react-bootstrap';

export const SourceList = () => {

    const [sources, setSources] = useState([]);

    useEffect(()=>{
      request('/api/sources/all',{}).then((result)=>{
        if(result.data){
          setSources( result.data );
        }
      });
    },[]);

    const removeSource = (id) => {
      const confirm = window.confirm('Are you sure to remove the source '+id+' ?');
      if(confirm){
        request('/api/sources/'+id,{
          method:'DELETE'
        }).then((result)=>{
          window.location.reload();
        });
      }
    }
    
    return (
      <div>
        <h1>Sources</h1>
        <a href={"/sources/new"} className="btn btn-info">New</a>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>URL</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((source, i) => (
              <tr key={i}>
                <td>{source._id}</td>
                <td>{source.name}</td>
                <td>{source.url}</td>
                <td>
                  <a href={"/sources/update/"+ source._id} className="btn btn-info">Update</a>
                  <button value={source._id} onClick={() => removeSource(source._id) } className="btn btn-danger">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );

};