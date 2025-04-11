import React, { useState } from 'react'
import sidebarlogo from '/instagram-text-icon.svg'
import { NavLink } from 'react-router-dom'
import { CircleUserRound, Compass, Heart, House, Instagram, LucideMenu, MenuIcon, MessageCircle, MessageCircleMore, PlusSquare, Search, SquarePlay } from 'lucide-react'

const links = [
    { icon: (<House size={27} strokeWidth={1.7} />), title: 'Home', to: '/', respons: 1 },
    { icon: (<Search size={27} strokeWidth={1.7} />), title: 'Search', },
    { icon: (<Compass size={27} strokeWidth={1.7} />), title: 'Explore', to: '/explore', respons: 1 },
    { icon: (<SquarePlay size={27} strokeWidth={1.7} />), title: 'Reels', to: '/reels', respons: 1 },
    { icon: (<MessageCircle size={27} strokeWidth={1.7} />), title: 'Massages', to: '/inbox', respons: 1 },
    { icon: (<Heart size={27} strokeWidth={1.7} />), title: 'Notifications', },
    { icon: (<PlusSquare size={27} strokeWidth={1.7} />), title: 'Create', respons: 1 },
    { icon: (<CircleUserRound size={27} strokeWidth={1.7} />), title: 'Profile', to: '/profile', respons: 1 },
]

const newLink = links.filter(user => user.respons == 1)

function Navbar() {
    return (
        <>
            <div className="sidebar">
                <NavLink className={'navlink'} to={'/'}>
                    <span className='logo-collapse'>{<Instagram size={27} />}</span>
                    <img src={sidebarlogo} alt="instagram" className="sidebarlogo" />
                </NavLink>

                <div className="sidebarlinks">
                    {
                        links.map((item, index) => {
                            return (
                                <NavLink className={"navlink"} to={item.to}>
                                    <div className='links' key={index}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
                <div className="bottommenu">
                    <MenuIcon size={27} strokeWidth={1.7} className='menu-logo' />
                    <span>Menu</span>
                </div>
            </div>

            <div className="min-nav">
                <div className="bottom-bar">
                    {
                        newLink.map((item, index) => {
                            return(
                                <>
                                    <NavLink className={'navlink'} to={item.to}>
                                        <div className='links'>
                                            {item.icon}
                                        </div>
                                    </NavLink>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar