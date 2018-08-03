import React from 'react';
import { Link } from 'react-router-dom';

const Grid = (props) => (
  <div className="wrapper">
    <ul style={{
      listStyleType: 'none',
      padding: 0
    }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/my-work">My Work</Link></li>
      <li><Link to="/skills">Skills</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    {props.children}
  </div>
);

export default Grid;
