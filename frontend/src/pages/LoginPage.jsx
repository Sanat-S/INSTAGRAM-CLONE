import React, { useState } from 'react'
import '../styles/Register.css'
import logo from '/instagram-text-icon.svg'
import { NavLink } from 'react-router-dom'

function LoginPage() {
    const [user, setUser] = useState({
        userId: [
            { name: '', number: '', email: '' }
        ],
        passwd: ''
    })

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        if (!user.userId) {
            alert("Please enter user id!")
        } else if (!user.passwd) {
            alert("Please enter password!")
        } else {
            const formData = new FormData()
            formData.append('userId', user.userId)
            formData.append('passwd', user.passwd)
        }

        console.log(user)
    }
    return (

        <div className="register">
            <div className="register-box">
                <div className="box">
                    <img src={logo} alt="logo" />

                    <input type="text" id='userId' name='userId' onChange={onValueChange} placeholder='Phone number, username or email address' />
                    <input type="password" name="passwd" id="passwd" onChange={onValueChange} placeholder='Password' />

                    <input className='register-btn' type="submit" value="Log in" onClick={onSubmit} />

                    <div className="or-option">
                        <div className="line"></div>
                        <span>OR</span>
                        <div className="line"></div>
                    </div>

                    <NavLink className={'navlink forgot-passwd'} to={''}>
                        <span>Forgotten your password?</span>
                    </NavLink>
                </div>
                <div className="box">
                    <span className='signup-option'>
                        Don't have an account? <NavLink className={'navlink option'} to={'/signup'}>Sign up</NavLink>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LoginPage