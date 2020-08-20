import React from 'react';

const LeftNav = () => {
    return (
        <div className='leftNav-main'>
            <div className='receipt'>
                GENERATE INVOICE
            </div>
            <div>
                <p>Main</p>
                <div><i className='fa fa-search'></i><p>Overview</p></div>
            </div>
            <div>
                <p>Payments</p>
                <div><i className='fa fa-search'></i><p>All Payments</p></div>
                <div><i className='fa fa-search'></i><p>Reconciled Payments</p></div>
                <div><i className='fa fa-search'></i><p>Unreconciled Payments</p></div>
                <div><i className='fa fa-search'></i><p>Manual Settlement</p></div>
            </div>
            <div>
                <p>Orders</p>
                <div><i className='fa fa-search'></i><p>All Orders</p></div>
                <div><i className='fa fa-search'></i><p>Pending Orders</p></div>
                <div><i className='fa fa-search'></i><p>Reconciled Orders</p></div>
            </div>
            
        </div>
    );
};

export default LeftNav;