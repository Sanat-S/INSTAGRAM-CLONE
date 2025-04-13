import React, { useState } from 'react'
import '../styles/Topbar.css'
import instalogo from '../assets/instagram-text-icon.svg'
import { Heart } from 'lucide-react'

function Topbar() {
    const [input, setInput] = useState({
        searchInput: ""
    })

    const onValueChange = (e) => {
        setInput({...input, [e.target.name] : e.target.value});
        console.log(input);
    }

  return (
    <div className="topbar">
        <img src={instalogo} alt="" />
        <div className="ser-not">
            <input type="search" name="search" id="" placeholder='Search' onChange={onValueChange}/>
            <Heart />
        </div>
    </div>
  )
}

export default Topbar