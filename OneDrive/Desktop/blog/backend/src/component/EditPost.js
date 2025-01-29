import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

export default function EditPost() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/getpostbyid/${id}`)
      .then(result => {
        setTitle(result.data.title);
        setDescription(result.data.description);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3001/editpost/${id}`, { title, description })
      .then(res => {
        if (res.data === 'Success') {
            navigate('/')          
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='post_container'>
      <div className='post_form'>
        <form onSubmit={handleSubmit}>
          <h2>Update Post</h2>
          <input type="text" placeholder='Enter title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            value={description}
            placeholder='Enter Description'
            onChange={(e) => setDescription(e.target.value)}>
          </textarea>
          <button className='btn btn-primary'>Update</button>
        </form>
      </div>
    </div>
  );
}
