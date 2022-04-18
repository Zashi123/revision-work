import React from 'react'
import nasteho from './nasteho.jpg'
// import {FaStar} from "react-icons/fa";
import { NavLink} from 'react-router-dom'
import * as FaIcons from "react-icons/fa";

function Header() {

    return (
        <div>

            <section className='cointainer'>
                <div className='navbar'>
                    <h1>< FaIcons.FaStar/></h1>
                    <h2> Star up</h2>
                    {/* <h1> < FaIcons.FaBars/> </h1> */}
                </div>
                <button className='put'>open</button>
                <div on className='nav' >
                    
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/'>About</NavLink>
                            <NavLink to='/'>Service</NavLink>
                            <NavLink to='/'>Blog</NavLink>
                            <NavLink to='/'>Contact</NavLink>
                        </li>
                    </ul>
                
                </nav>
                
                
                    <button>Join us</button>
                
                </div>
            </section>

            <section className="middle">
                <div>
                    
                    <p> WE ARE NEW BUT DOING GREAT</p> <br /> <br />
                  <h1>  WE GIVE POWER TO THE USERS</h1>  <br /> <br />
                  <p>Content marketing is nothing but offering users value.  <br />  it is not just about traffic minion customers</p> <br /> <br />
               

                <button className='mm'>EXPLORE</button>
                    
                </div>

                  <div className="sawir">
                    <img src={nasteho}alt='' />
                  </div>
                 
            </section> 
          
        </div>
    )
}

export default Header
