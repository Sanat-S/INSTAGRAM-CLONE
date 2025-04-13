import React, { useState } from 'react'
import { BookmarkIcon, CircleUserRound, Ellipsis, HeartIcon, MessageSquare, SendIcon, } from 'lucide-react'

import image from '../assets/image_3.jpg'

const post_data = [
    {
        avater: "User",
        userName: "User_01",
        post: image,
        title: 'Hello This Is my first post...'
    }
]


function Post() {
    const [com, setCom] = useState({
        com: ''
    })

    const onValueChange = (e) => {
        setCom({ ...com, [e.target.name]: e.target.value })
        console.log(com) // for test only
    }

    return (
        <>
            <div className="post">
                {
                    post_data.map((items, index) => {
                        return (
                            <div key={index}>
                                <div className="post-top">
                                    <div className="user">
                                        <div className="outer-prof">
                                            <div className="mid-prof">
                                                <div className="avater">
                                                    {items.avater}
                                                </div>
                                            </div>
                                        </div>
                                        <span>{items.userName}</span>
                                    </div>
                                    <Ellipsis size={25} />
                                </div>
                                <div className="post-mid">
                                    <img src={items.post} alt="" />
                                </div>
                                <div className="post-bottom">
                                    <div className="lcs-s">
                                        <div className="lcs">
                                            <button className="">
                                                <HeartIcon/>
                                            </button>
                                            <button className="">
                                                <MessageSquare/>
                                            </button>
                                            <button className="">
                                                <SendIcon/>
                                            </button>
                                        </div>
                                        <BookmarkIcon />
                                    </div>
                                    <p className='title'>{items.title}</p>
                                    <div className="commnt">
                                        <input className='com' type="text" placeholder='Add a comment...' name='com' onChange={onValueChange} />
                                        <input className='sub' type="submit" value="Post" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Post