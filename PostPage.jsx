import React from 'react'
import { useParams } from 'react-router-dom';
import PostsPage from './PostsPage';




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
      description: "Buy Iphone 15 Pro now and receive 150 Euro Bonus to our Shop Tech Apple ",
      price: 1579.99,
      image: "https://via.placeholder.com/150?text=Product+3",
    },
  ];


  function PostPage() {
    const{ id } = useParams();
    
    const post = posts.find((post) => post.id === id);


  return ( 
  <div>
    <h1 >{post.name}</h1>
    <img src ={post.image} alt="product" />
    <p style={{color: "blue", fontSize:"20px", fontFamily:"sans-serif"}}>{post.price}</p>
    <p style={{color: "blue", fontSize:"20px", fontFamily:"sans-serif"}}> {post.description}</p>
    </div>
  );
}

export default PostPage

