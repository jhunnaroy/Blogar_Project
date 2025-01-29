import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



export default function Home() {

  const [posts, setPosts] = useState([])


  useEffect(() => {
    axios.get('http://localhost:3001/getposts')
    .then(posts => {
      setPosts(posts.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
 <div className="home-main">
    <div className='home-view'>   
           {
            posts.map(post => (
              <Link key={post._id} to = {`/post/${post._id}`} className='post-view'>
             
                <img src={`http://localhost:3001/Images/${post.file}`} alt="" />
                <div className="posttext-view">
              <h2>{post.title}</h2>
              <h5>{post.description}</h5>
              </div>            
            </Link>
            ))
          }        
    </div>
  </div>
  )
}
