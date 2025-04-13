import { CircleUserRound } from 'lucide-react'
import React from 'react'

const feed = [
  {
    avater: (<CircleUserRound size={27} strokeWidth={1.7} />),
    userName: "User_01",
    postData: ""
  }
]

function Feed() {
  return (
    <div className="feed">
      {
        feed.map((item, index) => {
          return(
            <>
              <div className="post-container">
                <div className="top">
                  
                </div>
                <div className="mid"></div>
                <div className="bottom"></div>
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default Feed