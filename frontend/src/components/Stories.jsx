import React from 'react'
import '../styles/Stories.css'
import { UserCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const story = [
    {
        lable: "User_01", // for testing
        to: ''
    },
    {
        lable: "User_02", // for testing
        to: ''
    },
    {
        lable: "User_03", // for testing
        to: ''
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
                                <div className="sto_">
                                    <div className="inner_">
                                        <div className="lable">
                                            {items.lable}
                                        </div>
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