import React from 'react'
import '../styles/Stories.css'
import { Link } from 'react-router-dom'
import Avater from './Avater'
import avater from '../assets/user.png'

const story = [
    {
        image: avater,
        userName: "User_01", // for testing
        to: '',
        isStory: 1,
        isStorySeen: 0,
    },
    {
        image: avater,
        userName: "User_02", // for testing
        to: '',
        isStory: 1,
        isStorySeen: 0,
    },
    {
        image: avater,
        userName: "User_03", // for testing
        to: '',
        isStory: 1,
        isStorySeen: 0,
    },
    {
        image: avater,
        userName: "User_03", // for testing
        to: '',
        isStory: 1,
        isStorySeen: 0,
    },
    {
        image: avater,
        userName: "User_03", // for testing
        to: '',
        isStory: 1,
        isStorySeen: 0,
    },
    {
        image: avater,
        userName: "User_03", // for testing
        to: '',
        isStory: 1,
        isStorySeen: 0,
    },
    {
        image: avater,
        userName: "User_03", // for testing
        to: '',
        isStory: 1,
        isStorySeen: 0,
    },
    {
        image: avater,
        userName: "User_03", // for testing
        to: '',
        isStory: 1,
        isStorySeen: 0,
    },
    {
        image: avater,
        userName: "User_03", // for testing
        to: '',
        isStory: 1,
        isStorySeen: 0,
    },
    {
        image: avater,
        userName: "User_03", // for testing
        to: '',
        isStory: 1,
        isStorySeen: 0,
    },
    {
        image: avater,
        userName: "User_03", // for testing
        to: '',
        isStory: 1,
        isStorySeen: 0,
    },
    {

        image: avater,
        userName: "User_03", // for testing
        to: '',
        isStory: 1,
        isStorySeen: 0,
    },
    {
        image: avater,
        userName: "User_03", // for testing
        to: '',
        isStory: 1,
        isStorySeen: 0,
    },
    {
        image: avater,
        userName: "User_03", // for testing
        to: '',
        isStory: 1,
        isStorySeen: 0,
    },
    {
        image: avater,
        userName: "User_03", // for testing
        to: '',
        isStory: 1,
        isStorySeen: 0,
    },
]

function Stories() {
    return (
        <div className="stories">
            {
                story.map((items, index) => {
                    return (
                        <>
                            <Link className='navlink' to={items.to} key={index}>
                                <div className="story">
                                    <div className="single-container">
                                        <Avater
                                            image={items.image}
                                            size={'60px'}
                                            gap={'2px'}
                                            isStory={items.isStory}
                                            isStorySeen={items.isStorySeen}
                                            storyCircle={'3px'}
                                        />
                                        <span>{items.userName}</span>
                                    </div>
                                </div>
                            </Link>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Stories