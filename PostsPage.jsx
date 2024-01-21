import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const posts = [
    {
      id: "1",
      name: "Iphone 15 Pro Max 256 GB",
      description: "Buy an Iphone 15 Pro Max in our new Shop Tech Apple ",
      price: 1899.99,
      image: "https://via.placeholder.com/150?text=Product+1",
    },
    {
      id: "2",
      name: "Iphone 15 128 GB",
      description: "Buy Iphone 15 in our new Shop Tech Apple ",
      price: 1200.99,
      image: "https://via.placeholder.com/150?text=Product+2",
    },
    {
      id: "3",
      name: "Ipone 15 Pro 256 GB",
      description: "Buy Iphone 15 Pro in our new Shop Tech Apple ",
      price: 79.99,
      image: "https://via.placeholder.com/150?text=Product+3",
    },
  ];



  function PostsPage() {
    return (
      <div>
          <h1 style={{color: "blue", fontSize:"20px", fontFamily:"cursive"}}> Our Posts </h1>
          {posts.map((post) => (
              <div key ={post.id}>
                  <h4 style={{color: "blue", fontSize:"20px", fontFamily:"sans-serif"}}> {post.name} </h4>
                  <p style={{color: "black", fontSize:"15px", fontFamily:"sans-serif"}}>{post.price}</p>
                  <Link to={`post/${post.id}`}> Viiew More </Link>
              </div>
          ))}
          </div>
    );
  }
  


export default PostsPage