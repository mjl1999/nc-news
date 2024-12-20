import React from 'react'
import { Link } from 'react-router-dom'

const NewsPageNavBar = () => {
  return (
    <div style={{backgroundColor: "#ca1212",  marginTop: '44px', padding: "5px" }}>
       
      <ul style={{ display: 'flex', listStyleType: 'none', textDecoration: 'underline', color: "white"}}>
      <Link to="/news"><li  style={{ marginRight: '20px' }}>All</li></Link>
      <Link to="/news/coding"><li  style={{ marginRight: '20px' }}>Coding</li></Link>
      <Link to="/news/cooking"><li style={{ marginRight: '20px' }}>Cooking</li></Link>
      <Link to="/news/football"><li style={{ marginRight: '20px' }}>Football</li></Link>
      </ul>
    </div>
  )
}

export default NewsPageNavBar
