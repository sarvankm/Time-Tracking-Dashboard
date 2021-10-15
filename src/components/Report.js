import React, { useState } from 'react';

const Report = ({ setCategory }) => {
    const [focused, setFocused] = useState(true);
 
    return (
        <div className='report-container'>
            <div className='user-info'>
                <img src="/assets/img/image-jeremy.png" alt="" />
                <div className='title'>
                    <p>Report for</p>
                    <h2>Jeremy Robson</h2>
                </div>
            </div>
            <div className='navigation'>
                <a href="#" onClick={(e) => { setCategory('daily'); e.preventDefault(); setFocused(false) }}>Daily</a>
                {focused
                    ?
                    <a href="#" style={{ color: 'white' }} onClick={(e) => { setCategory('weekly'); e.preventDefault() }}>Weekly</a>
                    :
                    <a href="#" onClick={(e) => { setCategory('weekly'); e.preventDefault() }}>Weekly</a>
                }
                <a href="#" onClick={(e) => { setCategory('monthly'); e.preventDefault(); setFocused(false) }}>Monthly</a>
            </div>
        </div>
    );
}

export default Report;
