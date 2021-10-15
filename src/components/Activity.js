import React, { useState,useEffect } from 'react';

const Activity = ({ title, category, current, previous }) => {
    const [activity, setActivity] = useState({});
    const obj = [{
        title: 'Work',
        background: '#FF8B64',
        image: 'icon-work.svg'
    },
    {
        title: 'Play',
        background: '#56C2E6',
        image: 'icon-play.svg'
    },
    {
        title: 'Study',
        background: '#FF5E7D',
        image: 'icon-study.svg'
    },
    {
        title: 'Exercise',
        background: '#4BCF83',
        image: 'icon-exercise.svg'
    },
    {
        title: 'Social',
        background: '#7235D1',
        image: 'icon-social.svg'
    },
    {
        title: 'Self Care',
        background: '#F1C75B',
        image: 'icon-self-care.svg'
    }
    ]
    useEffect((e) => {
    const act = obj.filter((elem) =>elem.title === title)
    setActivity(...act)
    }, []);

    return (
        <div className='card-container' style={{ background: activity.background }} >
            <div className='icon'>
                <img src={"/assets/img/"+activity.image} alt="" />
            </div>
            <div className='activity'>
                <p>{activity.title}</p>
                <img src="/assets/img/icon-ellipsis.svg" alt="" />
                <h2>{current}hrs</h2>
                <p>Last Week - {previous}hrs</p>
            </div>
        </div>
    );
}

export default Activity;
