import React from 'react'
import './css/sidebar.css';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {

    const user = useSelector(selectUser);

    return (
        <div className='sidebar'>
            <div className='sidebar_profile'>
                 <img src='https://images.unsplash.com/photo-1694933225913-622980ec60be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80' />

                <div className='profile_details'>
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                    <p>Mern Stack Developer</p>
                </div>

                <div className='profile_status'>
                    <span>Who viewed your profile</span>
                    <span className='status_number'>30</span>
                </div>

                <div className='profile_status'>
                    <span>Connection<br/><b>Grow Your Network</b></span>
                    <span className='status_number'>500+</span>
                </div>
            </div>

            <div className='sidebar_recent'>
                <p>Recent</p>
                <p className='hash'><span>#</span> branding</p>
                <p className='hash'><span>#</span> webdevelopment</p>
                <p className='hash'><span>#</span> mernstack</p>
                <p className='hash'><span>#</span> node.js</p>
                <p className='hash'><span>#</span> programming</p>
                <p className='hash'><span>#</span> react.js</p>
                <p className='hash'><span>#</span> reduxtoolkit</p>
            </div>

        </div>
    )
}

export default Sidebar