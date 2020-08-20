import React from 'react';
import pp from '../images/user.png'

const Header = () => {
    return (
       <header>
           <div className='logo'>
               <h2>TransMonitor</h2>
           </div>
           <div className='search-div'>
                <i className='fa fa-search'></i>
                <input type='text' placeholder='Search...'/>
           </div>
           <div className='navigations'>
               <a href='#'>Support</a>
               <a href='#'>FAQ</a>
               <div className='profile'>
                   <div>
                       <p>Hello</p>
                       <p>Olawale Ojo</p>
                   </div>
                   <img src={pp} alt='profile pics'/>
               </div>
           </div>
       </header>
    );
};

export default Header;

// color: #1875F0 logo
// background: #27AE60 greenish