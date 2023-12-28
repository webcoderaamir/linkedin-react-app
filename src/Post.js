import React, { forwardRef } from 'react'
import { Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './css/post.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({name, description, message, photoURL}, ref) => {
  return (

    <div className='posts' ref={ref}>
        <div className='post_header'>
            <div className='post_headerLeft'>
                <Avatar src={photoURL}/>
                <div className='post_profileDet'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>

            <MoreVertIcon />
        </div>

        <div className='post_body'>
            <p>{message}</p>
        </div>

        <div className='post_footer'>
            <div className='post_footer_option'>
                <ThumbUpIcon />
                <span>Like</span>
            </div>

            <div className='post_footer_option'>
                <CommentIcon />
                <span>Comment</span>
            </div>

            <div className='post_footer_option'>
                <ShareIcon />
                <span>Share</span>
            </div>

            <div className='post_footer_option'>
                <SendIcon />
                <span>Send</span>
            </div>
        </div>
    </div>
  )
})

export default Post