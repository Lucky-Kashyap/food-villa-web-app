import React, { useState } from 'react';
import { food } from './ImageEntry';

const loggedInUser = ()=>{
  // API call to check authentication

  return false;
}

const Title=()=>{
    return (
        <>
        {/* <h1>Food Villa</h1> */}
        <img src={food} className='logo' alt='food-logo'/>
        </>
    )
}

const Header = () => {
  const [login,setlogin] = useState('false');

  return (
    <div className='header'>
        {/* <h1>Food app</h1> */}
        <Title/>
        <div className='nav-items'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
        </ul>
        </div>
        {
          login?<button onClick={()=>setlogin(false)}>Login</button>:<button onClick={()=>setlogin(true)}>Logout</button>
        }
        
        
    </div>
  )
}

export default Header;