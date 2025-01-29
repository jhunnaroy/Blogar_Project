import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MyPost() {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:3001/myposts')  
      .then(posts => {
        setUserPosts(posts.data);
      })
      .catch(err => console.log(err));
  }, []); 

  const handleEdit = (postId) => {    
    window.location.href = `/editpost/${postId}`;
  };

  const handleDelete = (postId) => {    
    axios.delete(`http://localhost:3001/deletepost/${postId}`)
      .then(result => {       
        setUserPosts(prevPosts => prevPosts.filter(post => post._id !== postId));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="mypost-container">
      <h2 className='mb-3'>Your Posts</h2>
      {userPosts.length > 0 ? (
        <div className="myposts-list ">
          {userPosts.map(post => (
            <div key={post._id} className="mypost-item">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <img src={`http://localhost:3001/Images/${post.file}`} alt="" />
              <div className="post-actions">
                <button className="btn btn-success my-3 mx-2" onClick={() => handleEdit(post._id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(post._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}
