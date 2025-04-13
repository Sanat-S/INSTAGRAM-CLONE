import React from 'react'
import { BookmarkIcon, CircleUserRound, Ellipsis, HeartIcon, MessageSquare, SendIcon, } from 'lucide-react'

import image from '../assets/image_3.jpg'

const post_data = [
    {
        avater: (<CircleUserRound size={35} strokeWidth={1.5} />),
        userName: "User_01",
        post: image,
    }
]

function Post() {
    return (
        <>
            <div className="post">
                {
                    post_data.map((items, index) => {
                        return (
                            <div key={index}>
                                <div className="post-top">
                                    <div className="user">
                                        {items.avater}
                                        <span>{items.userName}</span>
                                    </div>
                                    <Ellipsis size={25} />
                                </div>
                                <div className="post-mid">
                                    <img src={items.post} alt="" />
                                </div>
                                <div className="post-bottom">
                                    <div className="lcs">
                                        <button className="">
                                            <HeartIcon size={20} />
                                        </button>
                                        <button className="">
                                            <MessageSquare size={20} />
                                        </button>
                                        <button className="">
                                            <SendIcon size={20} />
                                        </button>
                                    </div>
                                    <BookmarkIcon />
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