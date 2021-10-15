import React from 'react';

const Report = ({ setCategory }) => {
    return (
        <div className='report-container'>
            <div className='user-info'>
                <img src="/assets/img/image-jeremy.png" alt="" />
                <p>Report for</p>
                <h2>Jeremy Robson</h2>
            </div>
            <div className='navigation'>
                <a href="#" onClick={(e) => {setCategory('daily');e.preventDefault()}}>Daily</a>
                <a href="#" onClick={(e) => {setCategory('weekly');e.preventDefault()}}>Weekly</a>
                <a href="#" onClick={(e) => {setCategory('monthly');e.preventDefault()}}>Monthly</a>
            </div>
        </div>
    );
}

export default Report;
