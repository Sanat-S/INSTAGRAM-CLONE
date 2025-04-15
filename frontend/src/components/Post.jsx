import React, { useState } from 'react'
import { BookmarkIcon, Ellipsis, HeartIcon, MessageSquare, SendIcon, } from 'lucide-react'

import image from '../assets/image_3.jpg'
import userIcon from '../assets/user.png'
import CommentDailogBox from './CommentDailogBox';
import Avater from './Avater';

const post_data = [
    {
        avater: userIcon,
        userName: "User_01",
        post: image,
        title: 'Hello This Is my first post...',
        comCount: 10,
        isStory: 1,
        isStorySeen: 0,
    }
]


function Post() {
    const [backFil, setBackFill] = useState(false)
    const [com, setCom] = useState({
        comText: ''
    });
    const [subDis, setSubDis] = useState("")

    const onChangeValue = (e) => {
        setCom({ ...com, [e.target.name]: e.target.value });
        const inputText = e.target.value;

        if (inputText.trim()) {
            setSubDis(inputText);
        } else {
            setSubDis("")
        }
    }

    const [comBox, setComBox] = useState(false)


    return (
        <>
            <div className="post">

                {
                    post_data.map((items, index) => {
                        return (

                            <div key={index}>
                                {
                                    backFil &&
                                    <div className="backgroundFilter" onClick={() => { setComBox(false); setBackFill(false); }}></div>
                                }
                                <div className="post-top">
                                    <div className="user">
                                        <Avater
                                            image={items.avater}
                                            size={'36px'}
                                            storySize={'3px'}
                                            gap={'2px'}
                                            isStory={items.isStory}
                                            isStorySeen={items.isStorySeen}
                                        />
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
                                                <HeartIcon />
                                            </button>
                                            <button className="" onClick={() => { setComBox(true); setBackFill(true) }}>
                                                <MessageSquare />
                                            </button>
                                            <button className="">
                                                <SendIcon />
                                            </button>
                                        </div>
                                        <BookmarkIcon />
                                    </div>
                                    <span className='like-count'>1000 likes</span>
                                    <p className='title'>
                                        <span>{items.userName}</span>
                                        {items.title}
                                    </p>
                                    <div className="com-dailog">
                                        <p className='com-dailog'>View all {items.comCount} comments</p>
                                        {comBox &&
                                            <CommentDailogBox
                                                post={items.post}
                                                avater={items.avater}
                                            />
                                        }
                                    </div>
                                    <div className="commnt">
                                        <input className='com' type="text" placeholder='Add a comment...' value={subDis} name='conText' onChange={onChangeValue} />
                                        {subDis && <input className='sub' type="submit" value="Post" />}
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