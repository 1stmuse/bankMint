import React from 'react';
import LeftNav from './LeftNav';
import Main from './Main'

const Body = () => {
    return (
        <div className='body'>
            <LeftNav/>
            <Main/>
        </div>
    );
};

export default Body;