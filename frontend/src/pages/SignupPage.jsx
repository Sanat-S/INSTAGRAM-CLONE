import React, { useState } from 'react'
import logo from '/instagram-text-icon.svg'
import '../styles/Register.css'
import { NavLink } from 'react-router-dom'

function SignupPage() {
    const [input, setInput] = useState({
        mobileOrEmail: "",
        passwd: "",
        fulName: "",
        usrName: ""  
    })

    const onValueChange = (e) => {
        setInput({...input, [e.target.name] : e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(!input.mobileOrEmail) {
            alert("Please enter your mobile or email!")
        } else if(!input.passwd) {
            alert("Please enter a password")
        } else if(input.passwd.length <= 8) {
            alert("Enter minimum 8 digit password!")
        } else if(!input.fulName) {
            alert("Please enter your full name!")
        } else if(!input.usrName) {
            alert("Please enter a user name!")
        } else{
            const formData = new FormData()
            formData.append('mobileOrEmail', input.mobileOrEmail)
            formData.append('passwd', input.passwd)
            formData.append('fulName', input.fulName)
            formData.append('usrName', input.usrName)

            console.log(input)
        }
    }

  return (
    <div className="register">
        <div className="register-box">
            <div className="box">
                <img src={logo} alt="logo" />
                <p>Sign up to see photos and videos from your friends.</p>

                <input type="text" name='mobileOrEmail' onChange={onValueChange} placeholder='Mobile number or email address' />
                <input type="password" name='passwd' onChange={onValueChange} placeholder='Password' />
                <input type="text" name='fulName' onChange={onValueChange} placeholder='Full Name' />
                <input type="text" name='usrName' onChange={onValueChange} placeholder='Username' />

                <input type="submit" value="Sign up" onClick={onSubmit} className='register-btn' />
            </div>
            <div className="box">
                <span className="signin-option">
                    Have an account?
                </span>
                <NavLink className={'navlink option'} to={'/login'}>Log in</NavLink>
            </div>
        </div>
    </div>
  )
}

export default SignupPage