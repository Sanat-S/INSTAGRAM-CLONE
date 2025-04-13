import React from 'react'
import Post from './Post'
import '../styles/Post.css'

function Posts() {
    return (
        <div>
            {
                [1, 2, 3, 4].map((items, index) => <Post key={index} />)
            }
        </div>
    )
}

export default Posts