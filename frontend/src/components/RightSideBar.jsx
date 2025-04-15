import React from 'react'
import '../styles/RightSideBar.css'
import { NavLink } from 'react-router-dom'
import Avater from './Avater'
import avater from '../assets/user.png'

const suggestion = [
  {
    avater: avater,
    userName: "User_01",
    name: "Instagram User",
    to: "",
    isStory: 1,
    isStorySeen: 0,
  },
  {
    avater: avater,
    userName: "User_02",
    name: "Instagram User",
    to: "",
    isStory: 1,
    isStorySeen: 0,
  },
  {
    avater: avater,
    userName: "User_03",
    name: "Instagram User",
    to: "",
    isStory: 0,
    isStorySeen: 0,
  },
  {
    avater: avater,
    userName: "User_04",
    name: "Instagram User",
    to: "",
    isStory: 1,
    isStorySeen: 0,
  },
  {
    avater: avater,
    userName: "User_05",
    name: "Instagram User",
    to: "",
    isStory: 1,
    isStorySeen: 0,
  },
]

function RightSideBar() {
  return (
    <div className='rightside'>
      <div className="per">
        <div className="cur-user">
          <Avater
            image={avater}
            size={'45px'}
            storyCircle={'2px'}
            gap={'1px'}
            isStory={1}
            isStorySeen={1}
          />
          <div className="user-name">
            <h6 className='user'>User_01</h6>
            <span className='name'>Instagram User</span>
          </div>
        </div>
        <button>Switch</button>
      </div>
      <div className="sugg">
        <div className="heading">
          <h6>Suggested for you</h6>
          <button>See All</button>
        </div>

        {
          suggestion.map((items, index) => {
            return (
              <>
                <NavLink className={'navlink'} to={items.to}>
                  <div className="per">
                    <div className="cur-user">
                      <Avater 
                        image={items.avater}
                        size={'45px'}
                        storyCircle={'2px'}
                        gap={'1px'}
                        isStory={items.isStory}
                        isStorySeen={items.isStorySeen}
                      />
                      <div className="user-name">
                        <h6 className='user'>{items.userName}</h6>
                        <span className='name'>{items.name}</span>
                      </div>
                    </div>
                    <button>Follow</button>
                  </div>
                </NavLink>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default RightSideBar