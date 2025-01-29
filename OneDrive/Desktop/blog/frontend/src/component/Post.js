import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams, useNavigate} from 'react-router-dom'
import { userContext } from '../App'




export default function Post() {
    const{id} = useParams()
    const [post, setPost] = useState({})
    const navigate = useNavigate()
    const user = useContext(userContext)

    useEffect(() => {
        axios.get(`http://localhost:3001/getpostbyid/${id}`)
        .then(result => setPost(result.data))
        .catch(err => console.log(err))
    }, [id])

    const handleDelete = (_id) => {
      axios.delete(`http://localhost:3001/deletepost/${id}`)
      .then(result => {
        navigate('/')
      })
      .catch(err => console.log(err))
    }
  return (
    <div className='postview_container'>
       <div className='postview'>
            <img src={`http://localhost:3001/Images/${post.file}`} alt="" />
         <div className='poststext-view'>
            <h2>{post.title}</h2>
            <h5>{post.description}</h5>
            <div>
              {
                user.email === post.email ?
                <>
                  <Link to= {`/editpost/${post._id}`} className='btn btn-success mx-1 '>Edit</Link>
                 <button className='btn btn-danger' onClick={(e) => handleDelete(post._id)}>Delete</button>
                </> : <></>
              }
            </div>          
         </div>
        </div>
    </div>
  )
}
 