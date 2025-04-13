import React from 'react'
import '../styles/RightSideBar.css'
import { NavLink } from 'react-router-dom'

const suggestion = [
  {
    avater: "User",
    userName: "User_01",
    name: "Instagram User",
    to: ""
  },
  {
    avater: "User",
    userName: "User_02",
    name: "Instagram User",
    to: ""
  },
  {
    avater: "User",
    userName: "User_03",
    name: "Instagram User",
    to: ""
  },
  {
    avater: "User",
    userName: "User_04",
    name: "Instagram User",
    to: ""
  },
  {
    avater: "User",
    userName: "User_05",
    name: "Instagram User",
    to: ""
  },
]

function RightSideBar() {
  return (
    <div className='rightside'>
      <div className="per">
        <div className="cur-user">
          <div className="avater">
            <span>User</span> {/* for tasting */}
          </div>
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
                      <div className="avater">
                        {items.avater}
                      </div>
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